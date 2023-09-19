import { LeftProps } from "./headerInterface"

export const leftHeaderItems: LeftProps[] = [
    {
        title: 'Products',
        menuItems: [{
            item: `Stickers`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-stickers.png`
        },{
            item: `Labels`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-labels.png`
        },{
            item: `Magnets`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-magnets.png`
        },{
            item: `Buttons`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-buttons.png`
        },{
            item: `Packaging`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-tape.png`
        },{
            item: `T-Shirts`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-t-shirts.png`
        },{
            item: `More`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_auto,q_auto:best,w_48/re-store-shared/navigation/custom-keychains.png`
        }]
    },
    {
        title: `Tools`,
        menuItems: [{
            item: `Studio`,
            description: `Create beautiful designs in minutes`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_svg,q_auto:best,w_48/re-store-shared/navigation/icon-studio.svg`
        },{
            item: `Trace`,
            description: `Remove the background from photos`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_svg,q_auto:best,w_48/re-store-shared/navigation/icon-trace.svg`
        },{
            item: `Upscale`,
            description: `Enlarge images without losing quality`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_svg,q_auto:best,w_48/re-store-shared/navigation/icon-upscale.svg`
        },{
            item: `Redraw`,
            description: `Upgrade images to vector graphics`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_svg,q_auto:best,w_48/re-store-shared/navigation/icon-redraw.svg`
        },{
            item: `Print`,
            description: `Turn images into print products`,
            image: `https://assets.stickermule.com/image/upload/c_lfill,fl_lossy,f_svg,q_auto:best,w_48/re-store-shared/navigation/icon-print.svg`
        }]
    },
    {
        title: `Samples`
    },
    {
        title: `Deals`
    }
]

export const rightHeaderItems = [{
    title: `Login`
},{
    title: `Sign up`
}]