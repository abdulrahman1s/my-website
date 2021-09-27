interface Project {
    name: string
    description: string
    url: string
}

export function parseProject({ astro: { source } }: { astro: { source: string }}): Project {
    const [, name, description, url] = source.match(/name: (.+)\ndescription: (.+)\nurl: (.+)/)
    
    return {
        name,
        description,
        url
    }
}