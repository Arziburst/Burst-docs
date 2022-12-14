// Types
export type TypesTextLinkSidebar = {
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
    ComponentLazy: any
    option: TypesOption
}
