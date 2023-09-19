interface RightHeaderProps {
    title: string,
}

interface MegaMenuItems {
    item: string,
    description?: string | undefined,
    image: string,
}

interface LeftHeaderProps {
    title: string,
    menuItems?: MegaMenuItems[] | undefined
}

export type RightProps = RightHeaderProps
export type LeftProps = LeftHeaderProps