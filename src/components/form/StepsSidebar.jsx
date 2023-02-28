// Mobile Sidebar Icons rendered at the top
export function StepsSidebar({ activeStep = 1 }) {
  return (
    <div className="step-container">
      {[1, 2, 3, 4].map((stepNo) => {
        const classString = stepNo === activeStep ? "step active" : "step";
        return (
          <div key={stepNo} className={classString}>
            {stepNo}
          </div>
        );
      })}
    </div>
  );
}
