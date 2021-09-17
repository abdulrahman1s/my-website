console.log(
  "%c ",
  "font-size: 800px;background:url(https://c.tenor.com/mZZoOtDcouoAAAAC/stop-it-get-some-help.gif) no-repeat;"
);

console.log("Learn to code, Don't copy other people stuff");
console.log(
  "Learn more at: https://www.whitesourcesoftware.com/resources/blog/copy-and-paste-code/"
);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const commands = [
  "neofetch",
  "ls -a",
  "code .",
  "sudo -s",
  "sudo apt install life",
  "rm -rf *",
  "rm -rf /boot",
  "cmatrix -C blue",
  "git init",
  "npm i",
  "cargo run",
  "pwd",
  "whoami",
  "cat .env",
  "clear",
  "ping google.com"
];

const username = document.getElementById("username");

let skip = false;

username.addEventListener("mouseover", async () => {
  if (skip) return;

  skip = true;

  const oldContent = username.innerText.slice(2);

  async function type(content) {
    username.innerHTML = "> ";
    for (let i = 0; i < content.length; i++) {
      username.innerHTML += content[i];
      await sleep(50);
    }
  }

  const command = commands[Math.floor(Math.random() * commands.length)];

  await type(command);

  await sleep(1000);

  await type(oldContent);

  skip = false;
});
