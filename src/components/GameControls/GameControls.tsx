import { FC } from "react";
import { Button } from "@/components/GameControls/Button";
import { settings } from "@/settings/settings";
import { Density, GameSize, GameSpeed } from "@/types/field";

export type GameControlsProps = {
  setGameSize: (gameSize: GameSize) => void;
  gameSize: GameSize;
  setGameSpeed: (gameSpeed: GameSpeed) => void;
  gameSpeed: GameSpeed;
  generationNumber: number;
  setDensity: (density: Density) => void;
  clearField: () => void;
};

export const FieldSizeButton: FC<
  GameControlsProps & { fieldSize: GameSize; dataTestId: string }
> = (props) => (
  <Button
    {...props}
    caption={`${settings["fieldSize"][props.fieldSize][0]} * ${
      settings["fieldSize"][props.fieldSize][1]
    }`}
    onClick={() => {
      props.setGameSize(props.fieldSize);
    }}
    selected={props.gameSize === props.fieldSize}
    disabled={false}
  />
);

export const GameSpeedButton: FC<
  GameControlsProps & {
    speedValue: GameSpeed;
    caption: string;
    dataTestId: string;
  }
> = (props) => (
  <Button
    {...props}
    caption={props.caption}
    onClick={() => {
      props.setGameSpeed(props.speedValue);
    }}
    selected={props.gameSpeed === props.speedValue}
    disabled={false}
    data-testid={props.dataTestId}
  />
);

export const DensityButton: FC<
  GameControlsProps & {
    densityValue: Density;
    caption: string;
    dataTestId: string;
  }
> = (props) => (
  <Button
    {...props}
    caption={props.caption}
    onClick={() => {
      props.setDensity(props.densityValue);
    }}
    selected={false}
    disabled={false}
  />
);

export const GameControls: FC<GameControlsProps> = (props) => (
  <>
    <div>Размер поля</div>
    <div>
      <FieldSizeButton
        {...props}
        fieldSize={"small"}
        dataTestId="FieldSizeButtonSmall"
      />
      <FieldSizeButton
        {...props}
        fieldSize={"medium"}
        dataTestId="FieldSizeButtonMedium"
      />
      <FieldSizeButton
        {...props}
        fieldSize={"big"}
        dataTestId="FieldSizeButtonBig"
      />
    </div>
    <div>Скорость</div>
    <div>
      <GameSpeedButton
        {...props}
        speedValue="pause"
        caption="Пауза"
        dataTestId="GameSpeedButtonPause"
      />
      <GameSpeedButton
        {...props}
        speedValue="slow"
        caption="Медленно"
        dataTestId="GameSpeedButtonSlow"
      />
      <GameSpeedButton
        {...props}
        speedValue="medium"
        caption="Средне"
        dataTestId="GameSpeedButtonMedium"
      />
      <GameSpeedButton
        {...props}
        speedValue="fast"
        caption="Быстро"
        dataTestId="GameSpeedButtonFast"
      />
      Поколение:{" "}
      <span data-testid="GenerationNumber">{props.generationNumber}</span>
    </div>
    <div>Заселить поле</div>
    <div>
      <Button
        caption="Очистить поле"
        onClick={props.clearField}
        selected={false}
        disabled={false}
        dataTestId="ClearFieldButton"
      />
      <DensityButton
        {...props}
        caption="Редко"
        densityValue="low"
        dataTestId="DensityButtonLow"
      />
      <DensityButton
        {...props}
        caption="Средне"
        densityValue="medium"
        dataTestId="DensityButtonMedium"
      />
      <DensityButton
        {...props}
        caption="Плотно"
        densityValue="high"
        dataTestId="DensityButtonHigh"
      />
    </div>
  </>
);
