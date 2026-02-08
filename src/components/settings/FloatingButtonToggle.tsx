import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface FloatingButtonToggleProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const FloatingButtonToggle: React.FC<FloatingButtonToggleProps> =
  React.memo(({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();

    const enabled = getSetting("show_floating_button") ?? true;

    return (
      <ToggleSwitch
        checked={enabled as boolean}
        onChange={(enabled) => updateSetting("show_floating_button", enabled)}
        isUpdating={isUpdating("show_floating_button")}
        label={t("settings.advanced.floatingButton.label")}
        description={t("settings.advanced.floatingButton.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  });
