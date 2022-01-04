

import {
    Container,
    Table,
    Thead,
    Text,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogCloseButton,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'


const ShowContests = ({ contestsData }: any) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef: any = React.useRef()
    const [success, setSuccess] = useState<boolean>(false)

    const Link = process.env.REACT_APP_BACKEND



    // const handleDelete = async (id: string) => {
    //     const data = await axios.delete(`${Link}/student/${id}`)
    //     if (data.status === 200) {
    //         onOpen()
    //         setSuccess(true)
    //     } else {
    //         setSuccess(false)
    //         onOpen()

    //         return
    //     }
    // }



    return (
        <>
            <Container >
                {/* <Center> */}

                <Table size='md' >

                    <Thead>
                        <Tr>

                            <Th>Title</Th>
                            <Th>Type</Th>
                            <Th>Deadline</Th>
                            <Th>Tags</Th>
                            <Th>Time</Th>
                        </Tr>
                    </Thead>


                    {contestsData.map((e: any) => (

                        <Tbody key={e._id} >
                            <Tr >

                                <Td fontSize="19px"> {e.title} </Td>
                                <Td fontSize="19px">{e.type} </Td>
                                <Td fontSize="19px">{e.deadline} </Td>
                                <Td fontSize="19px">{e.tags} </Td>
                                <Td fontSize="19px">{e.time} </Td>
                                {/* <Td>
                                    <Button onClick={() => {
                                        handleDelete(e._id)
                                    }} colorScheme='red'>Delete</Button>

                                </Td> */}
                            </Tr>

                        </Tbody>
                    ))}

                </Table>
                {/* </Center> */}


                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                        <AlertDialogHeader>{success ? <Text>Success</Text> : <Text>Error</Text>}</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            {success ?
                                <Text>Successfully Deleted</Text>
                                :
                                <Text>Something Went wrong</Text>}
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button colorScheme='red' ref={cancelRef} onClick={onClose}>
                                Ok
                            </Button>

                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            </Container>

        </>
    )
}

export { ShowContests }
