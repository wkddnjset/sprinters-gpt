import { yupResolver } from '@hookform/resolvers/yup';
import { UseFormProps, useForm } from 'react-hook-form';
import * as yup from 'yup';

export type FormDataType = {
  name: string;
  introduce: string;
  ongoing: string;
  businessModel: string;
  nextPlan: string;
};

/**
 * yup 을 이용하여 form의 유효성 검사를 도와줍니다.
 * react-hook-form과 yup을 연결해 줄 yupResolver 을 함께 사용합니다.
 *
 * validation에 반복되는 값은 상수로 빼서 관리합니다.
 *
 *
 *
 * @see https://github.com/jquense/yup#getting-started
 * @see https://yarnpkg.com/package/@hookform/resolvers#readme
 * */
export const exampleFormSchema = yup.object().shape({
  name: yup.string().required('해당 항목은 필수값 입니다.'),
  introduce: yup.string().required('해당 항목은 필수값 입니다.'),
  ongoing: yup.string().required('해당 항목은 필수값 입니다.'),
  businessModel: yup.string().required('해당 항목은 필수값 입니다.'),
  nextPlan: yup.string().required('해당 항목은 필수값 입니다.'),
});

const useBusinessPlanForm = (options?: UseFormProps<FormDataType>) => {
  return useForm<FormDataType>({
    resolver: yupResolver(exampleFormSchema),
    mode: 'onChange',
    ...options,
  });
};

export default useBusinessPlanForm;
