import React, { useEffect, useState } from 'react'
import './_header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { rightHeaderItems } from './headerData'

interface RightHeaderProps {
    title: string,
}

interface MegaMenuItems {
    item: string,
    description: string,
    image: string,
}

interface LeftHeaderProps {
    title: string,
    menuItems: MegaMenuItems[]
}

const Header : React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])
  return (
    <section className='header'>
        <div className='header__left'>
            <div>
                <svg height={'20'} viewBox='0 0 21 20'
                width={'21'} xmlns='http://www.w3.org/2000/svg'
                className='desktopOnly'>
                    <path className='sticker' clipRule={'evenodd'}
                    d='M12.7133 19.4382C12.4951 19.5031 12.267 19.5281 12.0399 19.5119C11.8195 19.5427 11.5949 19.5073 11.3946 19.4102C11.3332 19.3338 11.3009 19.2381 11.3034 19.1401C11.3035 19.0374 11.3153 18.9351 11.3385 18.835C11.3762 18.7211 11.3762 18.5982 11.3385 18.4843C11.2859 18.4071 11.0895 18.4387 10.9878 18.3826C10.8861 18.3265 10.8475 18.1757 10.8124 18.0143C10.8124 17.9617 10.7704 17.9162 10.7668 17.8741C10.759 17.5909 10.7945 17.3083 10.8721 17.0359C10.9352 16.7623 11.0123 16.5098 11.0579 16.2608C11.1264 15.8637 11.1476 15.4599 11.1211 15.0579C11.1002 14.8808 11.1002 14.7019 11.1211 14.5248C11.1491 14.3635 11.2158 14.2302 11.2508 14.0724C11.2508 14.0198 11.2508 13.9602 11.2508 13.9041C11.2508 13.8479 11.2859 13.8164 11.2894 13.7743C11.2838 13.6509 11.2709 13.5279 11.2508 13.406C11.2385 13.0189 11.2478 12.6313 11.2789 12.2452C11.2789 12.1365 11.3385 12.0172 11.2613 11.9681C10.9085 11.9788 10.5568 12.0151 10.2092 12.0769C9.21535 12.211 8.207 12.1957 7.21768 12.0313C7.13351 12.0137 7.04934 12.0137 6.96868 11.9927C6.36088 11.8604 5.78971 11.5958 5.2958 11.2176C5.22917 11.165 5.145 11.1054 5.06784 11.0423C4.99613 10.977 4.91866 10.9183 4.83638 10.8669C4.6666 10.8027 4.48096 10.7931 4.30549 10.8397C4.13002 10.8862 3.97351 10.9865 3.8579 11.1264C3.80179 11.2176 3.7597 11.3404 3.70359 11.4491C3.64748 11.5578 3.60189 11.6665 3.55279 11.7717C3.31431 12.3189 3.04777 12.8239 2.80578 13.3885C2.65207 13.7211 2.5197 14.0632 2.40948 14.4126C2.18853 15.1666 2.40948 16.1661 2.5673 16.8886C2.58833 16.9565 2.61292 17.0232 2.64095 17.0885C2.69969 17.2834 2.80432 17.4614 2.94606 17.6075C3.0162 17.6671 3.13544 17.7057 3.2126 17.7724C3.31535 17.8923 3.39931 18.0271 3.4616 18.1722C3.49317 18.2318 3.53876 18.2984 3.58084 18.3721C3.67203 18.5334 3.70359 18.6772 3.52473 18.7719C3.3573 18.8381 3.1787 18.8714 2.99867 18.8701C2.9145 18.8946 2.94255 19.0104 2.88995 19.0665C2.82145 19.1106 2.74707 19.1448 2.669 19.1682C2.3867 19.2367 2.09208 19.2367 1.80977 19.1682C1.76082 19.154 1.71517 19.1303 1.67544 19.0984C1.63571 19.0665 1.6027 19.027 1.5783 18.9823C1.5292 18.8315 1.64844 18.6316 1.53972 18.5194C1.49413 18.4703 1.39243 18.4773 1.30124 18.4387C1.15801 18.3722 1.04613 18.2528 0.989113 18.1055C0.841816 17.7338 0.929493 17.1481 0.915464 16.7027C0.915464 16.5694 0.890915 16.4256 0.887408 16.2783C0.887408 16.0083 0.813759 15.7418 0.785702 15.4752C0.763972 15.3569 0.735874 15.2398 0.701533 15.1245C0.659448 14.9316 0.627884 14.7247 0.571771 14.5318C0.504699 14.3375 0.504699 14.1264 0.571771 13.9321C0.589306 13.8795 0.645419 13.8339 0.673476 13.7638C0.712754 13.6609 0.730654 13.5511 0.726082 13.4411C0.698026 13.3885 0.568264 13.4411 0.533193 13.378C0.456037 12.7958 0.36836 12.2066 0.322768 11.5964C0.30874 11.3719 0.30874 11.1615 0.287697 10.9511C0.24912 10.5338 0.287697 10.1094 0.242105 9.70608C0.242105 9.50618 0.175471 9.32381 0.150921 9.13092C0.0237819 8.54613 -0.014056 7.94545 0.038695 7.34932C0.0975597 7.01664 0.237262 6.70352 0.445516 6.43748C0.589025 6.25082 0.7461 6.07499 0.915464 5.91142C1.08555 5.74775 1.26722 5.59655 1.45906 5.45901C1.58352 5.35963 1.71743 5.2727 1.85887 5.19948C2.2156 5.03487 2.5996 4.93738 2.99165 4.9119C3.43545 4.88316 3.88104 4.90197 4.32084 4.96802C4.72415 5.04167 5.12746 5.11181 5.52376 5.18896C5.92006 5.26612 6.29181 5.37133 6.65655 5.46602C6.70565 5.46602 6.74773 5.50811 6.79683 5.52214C6.91257 5.5537 7.04584 5.56071 7.1756 5.59578C7.57135 5.69357 7.97791 5.74071 8.38554 5.73607C8.80072 5.74906 9.21604 5.71494 9.62354 5.63436C9.67655 5.61598 9.72812 5.59371 9.77785 5.56773C9.83747 5.54669 9.90761 5.56773 9.96372 5.53266C10.0198 5.49759 10.0409 5.47654 10.083 5.45901C10.2903 5.35956 10.4887 5.24221 10.6757 5.1083C10.8225 4.99645 10.9827 4.90337 11.1526 4.83124C11.2438 4.79617 11.335 4.75058 11.4227 4.72252C11.6115 4.6723 11.7939 4.60052 11.9663 4.50859C12.1764 4.35681 12.3745 4.18915 12.559 4.00708C12.7554 3.83172 12.9588 3.65637 13.1657 3.49855C13.59 3.14784 14.0214 2.85325 14.4212 2.5306C14.6281 2.35654 14.8485 2.19939 15.0805 2.06065C15.7728 1.54924 16.6371 1.32782 17.4899 1.4434C17.5673 1.46657 17.6476 1.47839 17.7284 1.47847C17.802 1.47847 17.8582 1.35222 17.9037 1.26805C18.0052 1.10546 18.0943 0.935474 18.1703 0.759524C18.2369 0.626255 18.2018 0.5 18.3351 0.5C18.4684 0.5 18.4509 0.850708 18.4579 0.990991C18.4469 1.1533 18.4469 1.31616 18.4579 1.47847C18.4745 1.5291 18.505 1.57403 18.5459 1.60814C18.5868 1.64224 18.6365 1.66415 18.6893 1.67136C18.763 1.67136 18.8121 1.61174 18.8822 1.56966C18.9459 1.53902 19.008 1.50507 19.0681 1.46795C19.1919 1.36569 19.3091 1.25558 19.4188 1.13829C19.51 1.0436 19.6538 0.822651 19.8081 0.843694C20.0676 0.87175 19.8081 1.26104 19.752 1.38729C19.6152 1.6889 19.4819 1.91335 19.3276 2.20093C19.261 2.31667 19.1137 2.47449 19.1137 2.59723C19.1137 2.71998 19.1873 2.73752 19.2259 2.8287C19.2645 2.91988 19.254 2.91638 19.2715 2.95495C19.3616 3.20096 19.4388 3.45147 19.503 3.70547C19.5626 3.90888 19.6117 4.12983 19.6853 4.33324C19.759 4.53665 19.8642 4.71902 19.9449 4.9119C19.9659 4.96451 19.9694 5.02764 19.9905 5.08024C20.1588 5.51161 20.3236 6.00261 20.527 6.41644C20.6379 6.60847 20.7038 6.82308 20.7199 7.04421C20.6995 7.27111 20.606 7.48525 20.4534 7.65444C20.3868 7.76316 20.2921 7.92448 20.1939 7.95956C20.118 7.96655 20.0417 7.96655 19.9659 7.95956C19.8607 7.95956 19.787 8.04022 19.6959 8.05074C19.5799 8.05658 19.4651 8.02587 19.3676 7.96295C19.27 7.90002 19.1947 7.80806 19.1523 7.70003C19.1371 7.62724 19.1277 7.55336 19.1242 7.47909C19.0673 7.22266 18.919 6.99574 18.7069 6.8408C18.5879 6.72014 18.452 6.61736 18.3036 6.53568C18.0651 6.41293 17.802 6.33929 17.553 6.20251C17.4689 6.14711 17.3697 6.11895 17.269 6.12185C17.1357 6.1464 17.0024 6.36384 16.9183 6.50061C16.2659 7.35985 15.6873 8.25415 15.0525 9.08533C14.6009 9.63504 14.1962 10.2216 13.8426 10.8389C13.761 11.011 13.693 11.1892 13.6391 11.3719C13.5725 11.5578 13.5409 11.7612 13.4708 11.9541C13.2253 12.6555 13.1517 13.5113 12.9272 14.2442C12.9027 14.3214 12.8956 14.4091 12.8711 14.4932C12.7694 14.8685 12.6677 15.2964 12.5484 15.6927C12.4633 16.05 12.4198 16.416 12.4187 16.7834C12.3726 17.1581 12.4072 17.5384 12.5204 17.8986C12.5905 18.0214 12.843 18.067 12.9377 18.1967C13.0324 18.3265 13.0464 18.4562 13.1131 18.5755C13.1797 18.6947 13.2884 18.828 13.2779 18.9542C13.2699 18.9971 13.2513 19.0372 13.2237 19.0709C13.1961 19.1046 13.1605 19.1308 13.1201 19.1471C13.0429 19.1857 12.9272 19.1471 12.8536 19.2032C12.7799 19.2594 12.8009 19.3716 12.7133 19.4382Z'
                    fill='#fff' fillRule={'evenodd'}>
                    </path>
                </svg>
            </div>
            <div>
                <p>{`Products`}</p>
                <FontAwesomeIcon icon={faCaretDown} />
            </div>
        </div>
        {
            windowWidth < 1040 ? (
                <div className='header__mobileView__center'>
                    <svg viewBox='0 0 150 25' width='100%' xmlns='http://www.w3.org/2000/svg' className='jsx-4063173812 mobileOnly'>
                        <path fill='white' d='M29.938 21.406c-2.123 0-4.04-.233-5.748-1.942l2.2-2.2c1.114 1.112 2.565 1.268 3.6 1.268 1.165 0 2.382-.388 2.382-1.398 0-.673-.363-1.14-1.424-1.243l-2.124-.2c-2.434-.23-3.935-1.29-3.935-3.78 0-2.79 2.46-4.3 5.2-4.3 2.1 0 3.86.37 5.15 1.58l-2.07 2.1c-.78-.7-1.97-.9-3.14-.9-1.35 0-1.92.62-1.92 1.3 0 .5.2 1.07 1.4 1.17l2.12.21c2.67.26 4.01 1.69 4.01 3.96 0 2.98-2.54 4.4-5.73 4.4zm11.6-.156c-2.746 0-3.91-1.94-3.91-3.857v-6.68h-1.425V8.15h1.424V4.16h3.366v3.99h2.382v2.562h-2.382v6.474c0 .777.363 1.217 1.165 1.217h1.217v2.848h-1.838zM44.87 5.455V2.71h3.445v2.745H44.87zm.053 15.796V7.76h3.366v13.49h-3.37zm10.973.16c-2.693 0-6.033-1.45-6.033-6.91s3.34-6.89 6.033-6.89c1.864 0 3.262.57 4.454 1.82l-2.278 2.28c-.7-.75-1.295-1.06-2.175-1.06-.803 0-1.424.29-1.916.88-.51.65-.75 1.56-.75 2.98s.24 2.36.75 3.01c.5.6 1.12.88 1.92.88.88 0 1.48-.31 2.18-1.06l2.28 2.25c-1.19 1.24-2.59 1.84-4.45 1.84zm13.74-.15l-3.313-5.61-1.423 1.6v4.02h-3.37V2.82h3.37v10.46l4.48-5.517h4.063l-4.816 5.44 5.18 8.06h-4.17zm6.98-5.69c0 1.74 1.06 3.01 2.953 3.01 1.47 0 2.2-.41 3.05-1.27l2.04 2c-1.38 1.37-2.7 2.13-5.13 2.13-3.19 0-6.24-1.45-6.24-6.91 0-4.4 2.38-6.89 5.87-6.89 3.75 0 5.87 2.75 5.87 6.45v1.51H76.6zm4.816-3.75c-.362-.8-1.113-1.4-2.252-1.4-1.14 0-1.89.6-2.253 1.4-.207.5-.285.86-.31 1.45h5.125c-.025-.59-.102-.95-.31-1.45zm12.553-.36c-.518-.51-.958-.8-1.786-.8-1.04 0-2.18.78-2.18 2.49v8.13h-3.37V7.76h3.29v1.295c.64-.777 1.94-1.45 3.39-1.45 1.32 0 2.25.336 3.18 1.27l-2.54 2.562z' className='jsx-4063173812 sticker'></path>
                        <path fill='#f97805' d='M111.65 7.605c-1.683 0-2.9.518-4.04 1.71-.854-1.166-2.07-1.71-3.573-1.71-1.243 0-2.486.492-3.366 1.398V7.76h-3.28v13.49h3.37v-8.156c0-1.84 1.19-2.46 2.25-2.46 1.07 0 2.23.62 2.23 2.46v8.156h3.37v-8.234c0-1.76 1.22-2.382 2.25-2.382 1.06 0 2.23.62 2.23 2.46v8.156h3.37v-8.622c0-1.476-.39-2.745-1.48-3.832-.75-.75-1.96-1.19-3.31-1.19zm14.63 8.312c0 1.838-1.19 2.46-2.252 2.46-1.06 0-2.227-.622-2.227-2.46V7.76h-3.36v8.623c0 1.475.29 2.744 1.37 3.832.75.75 1.84 1.19 3.19 1.19 1.25 0 2.49-.465 3.37-1.397v1.243h3.29V7.76h-3.36v8.157zm8.876 1.27V2.813h-3.366V17.39c0 1.917 1.165 3.86 3.935 3.86h1.916V18.4h-1.29c-.85 0-1.19-.413-1.19-1.215zM150 14.05c0-3.703-2.123-6.447-5.878-6.447-3.496 0-5.878 2.486-5.878 6.888 0 5.47 3.055 6.92 6.24 6.92 2.434 0 3.755-.75 5.127-2.12l-2.04-1.99c-.85.86-1.58 1.27-3.05 1.27-1.89 0-2.95-1.27-2.95-3H150v-1.51zm-8.44-.803c.025-.597.102-.96.31-1.45.362-.805 1.113-1.4 2.252-1.4 1.14 0 1.89.595 2.252 1.4.208.49.285.852.31 1.45h-5.125z' className='jsx-4063173812 mule'></path>
                        <path fill='white' clipRule={'evenodd'} d='M13.82 22.744c-.195.093-.46.072-.733.08-.235.007-.565.012-.702-.11-.075-.065-.096-.207-.1-.29-.007-.1.018-.22.04-.332.024-.13.05-.3 0-.37-.06-.085-.27-.05-.382-.112-.118-.066-.152-.224-.19-.4-.013-.057-.046-.108-.05-.152-.034-.27.057-.634.12-.913.066-.295.152-.57.2-.843.074-.413.1-.88.07-1.305-.013-.22-.043-.396-.01-.58.033-.175.106-.32.14-.493.012-.055.003-.12.01-.18.008-.054.04-.097.04-.14.007-.116-.03-.258-.04-.402-.023-.387.007-.933.032-1.264.008-.116.062-.248-.02-.3-.403-.007-.77.07-1.145.12-1.01.13-2.278.146-3.25-.05-.093-.02-.186-.02-.272-.04-.69-.16-1.326-.455-1.817-.843-.07-.06-.16-.124-.25-.19-.08-.066-.17-.155-.25-.192-.39-.183-.91.028-1.07.28-.06.102-.11.232-.17.352-.06.115-.11.236-.16.35-.26.594-.55 1.16-.81 1.757-.15.344-.32.727-.43 1.114-.24.82-.01 1.918.17 2.69.02.07.06.14.08.22.06.186.19.434.33.56.08.067.21.107.29.182.11.092.19.275.27.43.04.066.09.14.13.22.1.174.14.33-.06.433-.14.08-.36.1-.57.11-.09.03-.06.15-.12.22-.03.04-.17.09-.24.11-.27.08-.72.08-.93 0-.1-.03-.22-.11-.25-.2-.05-.16.08-.37-.04-.5-.05-.05-.16-.04-.26-.09a.669.669 0 0 1-.34-.36c-.16-.4-.06-1.04-.08-1.53 0-.14-.02-.3-.03-.46-.01-.29-.08-.58-.11-.87-.01-.14-.06-.26-.09-.39-.04-.2-.08-.43-.14-.64-.06-.23-.07-.45.01-.65.02-.05.08-.1.11-.18.05-.11.07-.25.06-.35-.03-.05-.17-.01-.21-.07-.08-.63-.18-1.27-.23-1.93-.02-.22-.02-.45-.04-.68-.04-.45-.01-.92-.05-1.35-.02-.21-.07-.41-.1-.62C.1 11-.06 10.25.06 9.65c.08-.39.218-.708.44-.995.16-.2.33-.39.51-.57.18-.17.38-.34.59-.49.14-.1.28-.214.43-.284.34-.16.78-.29 1.24-.31.46-.02.988-.03 1.447.06.44.08.876.15 1.306.24.42.08.836.2 1.235.3.05.01.096.04.15.06.127.03.27.04.41.08.37.1.86.15 1.318.15.495 0 .94-.01 1.347-.11.06-.02.1-.05.17-.07.06-.03.14-.02.2-.04.04-.02.08-.06.13-.08.23-.11.43-.23.64-.37.162-.12.3-.22.52-.3.1-.03.195-.09.29-.12.21-.06.434-.12.593-.23.25-.16.437-.39.645-.57.22-.19.44-.37.66-.55.47-.36.93-.7 1.37-1.05.22-.18.47-.34.73-.49.51-.29 1.02-.63 1.75-.68.29-.02.59-.03.88.01.08.01.19.06.26.04.08-.02.14-.14.19-.23.11-.19.19-.32.28-.55.06-.14.03-.29.18-.28.15.01.12.39.13.53.01.18-.02.41.01.53.02.09.13.21.25.21.08 0 .14-.06.21-.11.08-.04.15-.07.2-.11.12-.09.26-.23.38-.36.1-.1.26-.34.43-.32.29.03 0 .46-.06.59-.15.33-.29.58-.46.89-.07.12-.23.3-.23.43 0 .09.08.15.12.25.02.045.03.09.05.14.1.23.18.55.25.81.07.226.12.46.21.68.08.22.2.42.28.636.03.06.03.127.05.18.19.47.36 1.007.58 1.46.09.185.22.41.21.685 0 .3-.15.44-.29.66-.07.12-.17.297-.28.33-.08.03-.17 0-.25.01-.11.02-.19.09-.29.1-.27.03-.51-.18-.59-.38-.02-.07-.01-.16-.03-.24-.06-.327-.22-.484-.45-.69-.14-.136-.26-.24-.44-.334-.26-.132-.54-.214-.81-.36-.1-.054-.223-.107-.31-.09-.143.027-.29.263-.4.41-.704.934-1.33 1.893-2.024 2.81-.46.607-.95 1.223-1.315 1.917-.09.178-.15.38-.22.58-.07.2-.11.42-.18.64-.27.76-.35 1.69-.59 2.49-.03.08-.04.18-.06.27-.11.41-.23.87-.35 1.31-.1.32-.13.76-.147 1.185-.01.397-.03.963.11 1.215.08.13.35.18.457.32.07.095.12.284.19.41.05.09.19.275.18.41-.01.103-.09.175-.17.21-.08.043-.21.02-.29.06-.09.05-.05.16-.14.22z' fillRule={'evenodd'} className='jsx-4063173812 sticker'></path>
                    </svg>
                </div>
            ) : (
                <div className='header__center'></div>
            )
        }
        <div className='header__right'>
            <div className='header__right__cartIcon'>
                <svg height={'18'} viewBox='0 0 928.6 1000' width={'18'} xmlns='http://www.w3.org/2000/svg'>
                    <path fill='#fff' d='M357 857q0 29-21 50t-50 22-50-22-22-50 22-50 50-21 50 21 21 50zm500 0q0 29-21 50t-50 22-50-22-22-50 22-50 50-21 50 21 21 50zm72-607v286q0 13-10 23t-22 12l-583 68q7 34 7 40 0 8-13 35h513q15 0 26 11t10 25-10 25-26 11H250q-14 0-25-11t-11-25q0-6 5-18t9-20 12-22 8-17l-98-459H36q-15 0-25-10T0 179t11-26 25-10h143q9 0 16 3t10 9 8 14 4 14 3 17 3 14h670q14 0 25 11t11 25z'></path>
                </svg>
            </div>
            <div className='header__right__labels'>
                {
                    rightHeaderItems && rightHeaderItems.length > 0 && rightHeaderItems.map((item: RightHeaderProps) => (
                        <h4 key={item.title} style={{color:'#fff'}}>{item.title}</h4>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Header