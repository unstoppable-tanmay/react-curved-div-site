"use client";

import { BentRectangle, ShapeProps } from "react-curved-div";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Slider } from "../ui/slider";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";

const MasterControl = () => {
  const [control, setControl] = useState<ShapeProps>({
    topLeftCornerRadius: 12,
    topRightCornerRadius: 12,
    bottomLeftCornerRadius: 12,
    bottomRightCornerRadius: 12,
    topBendPercent: 4,
    bottomBendPercent: 4,
    leftBendPercent: 4,
    rightBendPercent: 4,
    bendDirection: "inward",
    isFullHeightOfParent: false,
    isFullWidthOfParent: false,
    contentClassName: "p-6 bg-gray-200 no-scrollbar",
    className: "h-[clamp(150px,300px,90vh)] w-[clamp(200px,400px,90vw)]",
  });
  return (
    <>
      <BentRectangle
        className={control.className}
        topLeftCornerRadius={control.topLeftCornerRadius}
        topRightCornerRadius={control.topRightCornerRadius}
        bottomLeftCornerRadius={control.bottomLeftCornerRadius}
        bottomRightCornerRadius={control.bottomRightCornerRadius}
        topBendPercent={control.topBendPercent}
        bottomBendPercent={control.bottomBendPercent}
        leftBendPercent={control.leftBendPercent}
        rightBendPercent={control.rightBendPercent}
        bendDirection={control.bendDirection}
        contentClassName={control.contentClassName}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt maiores,
        soluta officiis corrupti quasi repellat earum recusandae nihil labore
        dolorum repellendus sint nobis sit sapiente odio voluptatibus, et ea
        architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptate non eligendi debitis ipsa nobis nisi rem sint ex, cumque cum
        nam nulla eos ad? Beatae magnam doloremque mollitia a exercitationem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        debitis illo ducimus, possimus eos omnis quo dicta, harum rem,
        consequuntur illum voluptates ad adipisci qui dolorum earum vero minus
        eveniet.
      </BentRectangle>

      <div className="flex flex-col mt-6 gap-4">
        <div className="flex w-[clamp(200px,400px,90vw)] items-center justify-center gap-1 text-center">
          outward
          <Switch
            checked={control.bendDirection === "inward"}
            onCheckedChange={(e) =>
              setControl((prev) => ({
                ...prev,
                bendDirection: e ? "inward" : "outward",
              }))
            }
          />
          inward
        </div>
        <div className="flex gap-5 w-[clamp(200px,400px,90vw)]">
          <SliderComp
            label="Top Bend"
            value={control.topBendPercent || 0}
            onValueChange={(bend) =>
              setControl({ ...control, topBendPercent: bend })
            }
          />
          <SliderComp
            label="Bottom Bend"
            value={control.bottomBendPercent || 0}
            onValueChange={(bend) =>
              setControl({ ...control, bottomBendPercent: bend })
            }
          />
        </div>
        <div className="flex gap-5 w-[clamp(200px,400px,90vw)]">
          <SliderComp
            label="Left Bend"
            value={control.leftBendPercent || 0}
            onValueChange={(bend) =>
              setControl({ ...control, leftBendPercent: bend })
            }
          />
          <SliderComp
            label="Right Bend"
            value={control.rightBendPercent || 0}
            onValueChange={(bend) =>
              setControl({ ...control, rightBendPercent: bend })
            }
          />
        </div>
        <div className="flex w-[clamp(200px,400px,90vw)] gap-2">
          <InputComp
            label="T-L"
            onValueChange={(e) =>
              setControl((prev) => ({ ...prev, topLeftCornerRadius: e }))
            }
            value={control.topLeftCornerRadius || 0}
          />
          <InputComp
            label="T-R"
            onValueChange={(e) =>
              setControl((prev) => ({ ...prev, topRightCornerRadius: e }))
            }
            value={control.topRightCornerRadius || 0}
          />
          <InputComp
            label="B-L"
            onValueChange={(e) =>
              setControl((prev) => ({ ...prev, bottomLeftCornerRadius: e }))
            }
            value={control.bottomLeftCornerRadius || 0}
          />
          <InputComp
            label="B-R"
            onValueChange={(e) =>
              setControl((prev) => ({ ...prev, bottomRightCornerRadius: e }))
            }
            value={control.bottomRightCornerRadius || 0}
          />
        </div>
      </div>
    </>
  );
};

export default MasterControl;

const SliderComp = ({
  onValueChange,
  value,
  label,
}: {
  value: number;
  label: string;
  onValueChange: (arg: number) => void;
}) => {
  return (
    <div className="*:not-first:mt-4 flex-1">
      <Label>{label}</Label>
      <Slider
        defaultValue={[value || 0]}
        onValueChange={(bend) => onValueChange(bend[0])}
        className="[&>:last-child>span]:border-background [&>:last-child>span]:bg-primary **:data-[slot=slider-thumb]:shadow-none [&>:last-child>span]:h-6 [&>:last-child>span]:w-2.5 [&>:last-child>span]:border-[3px] [&>:last-child>span]:ring-offset-0"
        aria-label="Slider with tiny thumb"
      />
    </div>
  );
};
const InputComp = ({
  onValueChange,
  value,
  label,
}: {
  value: number;
  label: string;
  onValueChange: (arg: number) => void;
}) => {
  return (
    <div className="*:not-first:mt-4 flex-1">
      <Label>{label}</Label>
      <Input
        defaultValue={value}
        onChange={(radius) => onValueChange(Number(radius.target.value))}
        type="number"
      />
    </div>
  );
};
