import logo_small from "../images/logo_small.png";
import { Box, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <header>
            <Box maxWidth="1280px" margin="0 auto">
                <HStack
                    px={100}
                    py={10}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <a href="/">
                        <img src={logo_small} style={{width: "150px"}} alt="Little Lemon logo"/>
                    </a>
                    <nav>
                        <HStack spacing={24}>
                            <a href="/">Home</a>
                            <a href="/menu">Menu</a>
                            <a href="/order">Order</a>
                            <a href="/about">About</a>
                            <a href="/login">Login</a>
                            <a href="/reservations">
                                <button>Reserve a Table</button>
                            </a>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </header>
    );
}

export default Header;