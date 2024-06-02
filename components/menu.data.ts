interface IMenuItem{
    name: string,
    url: string,
    icon:string,
}

export const MENU:IMenuItem[] = [
    {
        name:'Главная',
        icon:'material-symbols:dashboard',
        url:'/'
    },
    {
        name:'Товары',
        icon:'gridicons:product',
        url:'/products'
    }
]