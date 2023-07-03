import React from 'react';

import { Select } from 'chakra-react-select';
import { Controller, UseFormReturn } from 'react-hook-form';

import {
  Box,
  BoxProps,
  Button,
  Radio,
  RadioGroup,
  Text,
  Textarea,
} from '@chakra-ui/react';

import FormHelper from '@/components/FormHelper';

import { FormDataType } from '../hooks/useBusinessPlanForm';

interface ReactHookFormSectionProps extends BoxProps {
  formData: UseFormReturn<FormDataType>;
}

const ReactHookFormSectionView = ({
  formData: {
    register,
    formState: { errors },
  },
  onSubmit,
  ...basisProps
}: ReactHookFormSectionProps) => {
  // name: string;
  // introduce: string;
  // ongoing: string;
  // businessModel: string;
  // nextPlan: string;

  return (
    <Box
      as="form"
      maxW="500px"
      w="100%"
      mt="40px"
      pb="50px"
      onSubmit={onSubmit}
      {...basisProps}
    >
      <FormHelper
        mb="30px"
        label="사업 아이템명이 무엇인가요?"
        errorText={errors.name?.message}
      >
        <Textarea {...register('name')} autoComplete="off" />
      </FormHelper>

      <FormHelper
        mb="30px"
        label="아이템에 대한 설명을 적어주세요."
        errorText={errors.introduce?.message}
      >
        <Textarea {...register('introduce')} autoComplete="off" />
      </FormHelper>

      <FormHelper
        mb="30px"
        label="사업 진행 상황(준비정도, 완성도)을 적어주세요."
        errorText={errors.ongoing?.message}
      >
        <Textarea flexGrow={1} {...register('ongoing')} autoComplete="off" />
      </FormHelper>

      <FormHelper
        mb="30px"
        label="사업 확장 전략과 비즈니스 모델을 적어주세요."
        errorText={errors.businessModel?.message}
      >
        <Textarea
          flexGrow={1}
          {...register('businessModel')}
          autoComplete="off"
        />
      </FormHelper>

      <FormHelper
        mb="30px"
        label="향후 계획을 입력해주세요."
        errorText={errors.nextPlan?.message}
      >
        <Textarea flexGrow={1} {...register('nextPlan')} autoComplete="off" />
      </FormHelper>

      <Button type="submit" w="100%" h="60px">
        <Text textStyle="text-lg">사업계획서 작성하기!</Text>
      </Button>
    </Box>
  );
};

export default ReactHookFormSectionView;
