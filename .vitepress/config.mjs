import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import { join, sep, basename } from 'path'

const docsRoot = './docs'

function isFile(docsDir) {
    const stat = fs.statSync(docsDir)
    return stat.isFile()
}
function splitPath(path) {
    return path.split(sep)
}
function dfs(node) {
    const markdownList = []
    const stack = [node]
    const hadVisited = [node]
    let curNode, children
    while (stack.length !== 0) {
        curNode = stack.pop()
        if (isFile(curNode)) {
            if (curNode.endsWith('.md')) {
                markdownList.push(
                    splitPath(curNode)
                )
            }
            continue
        }
        children = fs.readdirSync(curNode).map(v => join(curNode, v))
        for (const child of children) {
            if (!hadVisited.includes(child)) {
                stack.push(curNode, child)
                hadVisited.push(child)
                break
            }
        }
    }
    return markdownList
}

function generateSideBar(markdownList) {
    const sidebar = []
    const textMap = new Map()
    markdownList.forEach(links => {
        if (textMap.has(links[1])) {
            const items = textMap.get(links[1])
            textMap.set(links[1], [...items, links.join('/')])
        } else {
            textMap.set(links[1], [links.join('/')])
        }
    })
    for (const [text, links] of textMap) {
        const items = links.map(link => ({
            text: basename(link, '.md'),
            link
        }))

        sidebar.push({
            text,
            items
        })
    }
    return sidebar
}
const markdownList = dfs(docsRoot)
const sidebar = generateSideBar(markdownList)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "linhieng 的 vscode 笔记",
  description: "本网站使用 VitePress 生成",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'vscode 笔记', link: '/README' },
      { text: 'web 笔记', link: 'https://blog.linhieng.com/Lim-note-web' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/linhieng/lim-note-vscode' }
    ]
  }
})
