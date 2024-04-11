import React from "react";
import { Box, Heading, Text, Image, Flex, Spacer, Link, Button } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex bg="blue.500" p={4} color="white" align="center">
        <Heading size="xl">코리아테크</Heading>
        <Spacer />
        <Link href="tel:02-862-0160" mr={4}>
          <FaPhone />
        </Link>
        <Link href="mailto:sales@korea-tech.co.kr">
          <FaEnvelope />
        </Link>
      </Flex>

      {/* Hero Image */}
      <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZXxlbnwwfHx8fDE3MTI4MDE4ODF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Office" />

      {/* About Section */}
      <Box p={8}>
        <Heading mb={4}>회사 소개</Heading>
        <Text>코리아테크는 최첨단 기술 솔루션을 제공하는 선도적인 기업입니다. 우리는 고객의 비즈니스 성공을 위해 최선을 다하고 있습니다.</Text>
      </Box>

      {/* Products & Services */}
      <Box p={8} bg="gray.100">
        <Heading mb={4}>제품 및 서비스</Heading>
        <Flex>
          <Box p={4} bg="white" borderRadius="md" boxShadow="md" mr={4}>
            <Heading size="md" mb={2}>
              제품 1
            </Heading>
            <Text>제품 1에 대한 설명입니다.</Text>
          </Box>
          <Box p={4} bg="white" borderRadius="md" boxShadow="md">
            <Heading size="md" mb={2}>
              제품 2
            </Heading>
            <Text>제품 2에 대한 설명입니다.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Section */}
      <Box p={8}>
        <Heading mb={4}>문의하기</Heading>
        <Flex align="center">
          <FaMapMarkerAlt size="40px" mr={4} />
          <Box>
            <Text fontWeight="bold">코리아테크</Text>
            <Text>서울특별시 금천구 가산디지털1로 168 우림라이온스밸리 A동 1201호</Text>
          </Box>
        </Flex>
        <Button mt={4} colorScheme="blue">
          문의하기
        </Button>
      </Box>

      {/* Footer */}
      <Box p={4} bg="gray.200" textAlign="center">
        <Text>&copy; 2023 코리아테크. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
