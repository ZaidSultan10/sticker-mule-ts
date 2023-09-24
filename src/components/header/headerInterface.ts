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
    menuItems?: MegaMenuItems[]
}

interface SubMenuProps {
    subMenuProps?: MegaMenuItems[]
}

export type RightProps = RightHeaderProps
export type LeftProps = LeftHeaderProps
export type MenuProps = SubMenuProps
export type MegaMenuProps = MegaMenuItems