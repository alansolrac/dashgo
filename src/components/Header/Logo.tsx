import { Text } from '@chakra-ui/react'
import Link from 'next/link'

export function Logo() {
    return (
        <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
        >
            <Link href="/dashboard">
            dashgo
            </Link>
            <Text  as="span" ml="1" color="pink.500">.</Text>
        </Text>
    )
}