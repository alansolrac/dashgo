import { Flex, Box, Avatar, Text  } from "@chakra-ui/react";

export function Profile() {
    return( 
        <Flex align="center">
        <Box mr="4" TextAlign="right">
            <Text>Alan Oliveira</Text>        
            <Text color="gray.300" fontSize="small">
                developerjs.alan@gmail.com
            </Text>        
        </Box>

        <Avatar size="md" name="Alan Oliveira" src="https://www.github.com/alansolrac.png"/>
    </Flex>
    )
}