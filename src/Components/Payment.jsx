import React from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Link,
  Button,
} from "@chakra-ui/react";

const PaymentOrderComponent = () => {
  return (
    <Box>
      <Box id="ten10_off">
        <Link href="">10% off a $50+ Buy Online, Pick Up In Store Order</Link>
      </Box>
      <Flex id="chek_split">
        <Box id="chek_split_1">
          <Box id="shipName">
            <Text fontSize="lg" fontWeight="bold">
              Shipping
            </Text>
            <Flex id="checkinf">
              <Input placeholder="First name" type="text" mr={2} />
              <Input placeholder="Last name" type="text" />
            </Flex>
            <Input placeholder="Address" type="text" mt={2} mb={2} />
            <Link fontSize="sm" href="">
              Change Country
            </Link>
            <Checkbox mt={2}>
              <Text fontSize="sm">
                My Billing address is same
              </Text>
            </Checkbox>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Payment
            </Text>
            <Checkbox mt={2}>
              <Text fontSize="md" fontWeight="bold" color="rgb(14, 47, 86)">
                Pay
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="bold"
                  color="rgb(43, 113, 199)"
                  fontStyle="italic"
                >
                  pal
                </Text>
              </Text>
            </Checkbox>
            <Checkbox mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Credit Card
              </Text>
            </Checkbox>
            <Input
              placeholder="Card Number"
              type="text"
              mt={2}
              mb={2}
            />
            <Flex>
              <Input placeholder="MM/YY" type="text" mr={2} />
              <Input placeholder="CVV" type="text" />
            </Flex>
          </Box>
        </Box>
        <Box id="chek_split_2" ml={6}>
          <Text fontSize="lg" fontWeight="bold">
            We love what you've picked!
          </Text>
          <Text fontSize="md" mt={2}>
            Arrive in 3 to 8 days
          </Text>
          <Box>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              Order
            </Text>
            <Flex justifyContent="space-between" mt={2}>
              <Text>Subtotal</Text>
              <Text id="sub_total">$</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={2}>
              <Text>Shipping</Text>
              <Text id="Shipping_cost">$</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={2}>
              <Text fontSize="lg" fontWeight="bold">
                Order Total
              </Text>
              <Text fontSize="lg" fontWeight="bold" id="Order_total">
                $
              </Text>
            </Flex>
            <Button mt={4} colorScheme="blue">
              Place order
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentOrderComponent;
