import styled, {css} from "styled-components";

export const Title = styled.h1`
    font-size: 3rem;
    font-weight:bold;
    text-decoration: underline;

    ${props => props.theme === 'dark' && css` 
    background: #000;
    color:#fff;
    &:hover {
        background:blue;
    }
    `}
`

//! PROPS islemi ile burada eger theme dark ise css uygula ve arka plani siyah, yazi rengini de beyaz yap diyoruz.
//! Hover islemini de basina &: gelecek sekilde yapabiliriz
//! Bulmak istedigin her seyi styled-components adi altindaki yerden inceleyip bulabilirsin.

