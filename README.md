# DTS Final Project

Ketentuan lengkap bisa dilihat di [Final Project Guidelines](https://docs.google.com/document/d/1tIJWFEUr2NU8FZSxAA1IPi7ZYVn1jBDp6IdFUZjempg/edit?usp=sharing).

## Fork and Clone

Mohon peserta bisa melakukan fork repo ini dan clone, untuk repositori yang di fork menggunakan penamaan:

`[nomor peserta tanpa strip]-dts-final-project`

Contoh: `1512345678001-dts-final-project`

## Branching, commit

Branch dapat sesuai dengan kebutuhan mandiri, namun hasil akhirnya harus di merge ke branch `main`.

============================================================================================================

# Tailwind Components by AAKEN Developer

## Button
Properties :
- title = Button Title, example : `My Button`
- bg = Button Background, example : `bg-color-50 hover:bg-color-100`
- txt = Button Text Color, example : `text-white`
- m = Button Margin, example : `m-5`
- href = Link Forward once Button Clicked, example : `https://www.google.com`
- sx = Customs Style, example : `{{padding:'2px'}}`
- click = Button Click Behaviour, example : `{() => console.log('clicked')}`

## JumboTitle
Properties :
- title = Jumbo Title, example : `My Jumbo Title`
- txt = Jumbo Title Text Color, example : `text-fire-500`
- m = Jumbo Title Margin, example : `m-2`

## DropdownMenu
Properties :
- title = Button Title, example : `My Button Title`
- btnBg = Button Background, example : `bg-fire-500 hover:bg-fire-600`
- btnTxt = Button Text, example : `text-white text-md font-medium`
- menuBg = Item Menu Background, example : `bg-white`
- menuBgTxt = Each Item Menu Background and Text when Hovering, example : `bg-fire-500 text-white font-medium`
- menuTxtInactive = Each Item Menu Text Color when Idling, example : `text-gray-900`
- padding = Button and Menu Padding, example: `px-2 py-2`
- iconMargin = Icon Item Menu Right Margin, example : `mr-2`
- menuItem = Data List of Menu Item, use Array data, consist of Object, example : {dataList} ; Object keys must be follow below patterns :
- title : Item Menu Title
- iconActive : Iconify Patterns when Item is Hovering
- iconInactive : Iconify Patterns when Item is Idling
- Example of Object Data :
`const dataList = [{title:"Edit",iconActive:"heroicons-solid:pencil",iconInactive:"heroicons-outline:pencil"},{title:"Delete",iconActive:"heroicons-solid:trash",iconInactive:"heroicons-outline:trash"}];`