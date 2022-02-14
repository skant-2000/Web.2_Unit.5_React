import React from 'react'
import styled from "styled-components"

const NavbarDiv = styled.div`
    position: relative;
    height: 50px;
    border: 1px solid;
    border-color: black;
    padding: 10px;
`;

const Image = styled.img`
    position: absolute;
    left: 0px;
    width: 100px;

    @media all and (max-width: 600px) {
        display: none;
    }
`;
const LinkWrapper = styled.div`
    position: absolute;
    right: 10%;
`;

const Link = styled.a`
    margin-right: 20px;
    font-size: 25px;
    text-decoration: none;
    color: red;

    @media all and (max-width: 600px) {
        font-size: 15px;
    }
`;

export default function Navbar() {
  return (
    <NavbarDiv>
        <Image src="https://newsd.in/wp-content/uploads/2021/03/Masai-School-1.jpg" />
        <LinkWrapper>
            <Link href='https://www.google.com/'>Google</Link>
            <Link href='https://www.facebook.com/'>Facebook</Link>
        </LinkWrapper>
    </NavbarDiv>
  )
}
