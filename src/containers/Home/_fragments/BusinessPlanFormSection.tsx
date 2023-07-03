import useBusinessPlanForm from '../hooks/useBusinessPlanForm';
import ReactHookFormSectionView from './BusinessPlanFormSection.view';

const ReactHookFormSection = () => {
  const formData = useBusinessPlanForm();
  const { handleSubmit } = formData;
  const onSubmit = handleSubmit(
    ({ name, introduce, ongoing, businessModel, nextPlan }) => {
      console.log(
        `submitted: ${name}, ${introduce}, ${ongoing}, ${businessModel}, ${nextPlan}`,
      );
    },
  );
  return <ReactHookFormSectionView formData={formData} onSubmit={onSubmit} />;
};

export default ReactHookFormSection;
