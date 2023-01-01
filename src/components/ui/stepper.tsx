import { FC } from "react";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { UIStyles } from "../../theme/globalStyles";

interface Props {
  steps: string[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const StepProgress: FC<Props> = ({ steps, currentStep, setCurrentStep }) => {
  const { root, stepper } = UIStyles();

  return (
      <Stepper activeStep={currentStep} className={stepper}>
        {steps.map((step, index) => (
          <Step key={step}>
            <StepLabel
              onClick={() => setCurrentStep(index)}
              style={{ cursor: "pointer" }}
            >
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
  );
};

export default StepProgress;
