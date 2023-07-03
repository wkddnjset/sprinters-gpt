import React from 'react';

import { Box, Center, Text, Textarea, VStack } from '@chakra-ui/react';

import BusinessPlanFormSection from './_fragments/BusinessPlanFormSection';

function Home() {
  return (
    <Center flexDirection="column">
      <Text textStyle="extra-lg">사업계획서 작성 AI</Text>
      <BusinessPlanFormSection />
    </Center>
  );
}

export default Home;

// 문제인식(Problem)
// 1. 창업아이템 배경 및 필요성
// 2. 창업아이템 목표시장(고객) 현황 분석
// 실현가능성(Solution)
// 1. 창업 아이템 현황(준비 정도)
// 2. 창업 아이템 실현 및 구체화 방안
// 성장 전략(Scale-up)
// 1. 창업아이템 사업화 추진전략
// 2. 생존율 제고를 위한 노력
// 사업 추진 일정 및 자금 운용 계획
// 1. 사업 전체 로드맵
// 2. 목표 및 달성 방안
