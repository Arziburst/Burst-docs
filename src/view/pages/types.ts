// Types
type TypesTextLinkSidebar = {
    id: string
    text: string
}
type TypesNavLink = {
    path: string
    textLink: TypesTextLinkSidebar
    subtitles?: TypesTextLinkSidebar[]
}
export type TypesOption = {
    rootRoutePath: string
    navLink: TypesNavLink
}
export type TypesPage = {
    importLazy: any
    option: TypesOption
}
