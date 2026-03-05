import Icon from "../Icon/Icon";
import { Text } from "../Text/Text";
import Status from "../Status/Status";
import "./_statistics.scss";
import type { StatisticsProps } from "./Statistics.types";
import ProgressIndicator from "../ProgressIndicator";

const TREND_ICON: Record<NonNullable<StatisticsProps["trend"]>, string> = {
    up: "TrendUp",
    down: "TrendDown",
    neutral: "Minus",
};

export function Statistics({
    label,
    value,
    helperText,
    statusLabel,
    changeText,
    trend = "neutral",
    icon,
    actionIcon,
    showAccentRail = true,
    accent = "neutral",
    progressValue,
    progressLabel,
    progressDelta,
    className = "",
    ...rest
}: StatisticsProps) {
    const hasContent = (content: unknown): boolean =>
        content !== undefined && content !== null && content !== false && content !== "";

    const clampedProgress =
        typeof progressValue === "number" && Number.isFinite(progressValue)
            ? Math.min(100, Math.max(0, progressValue))
            : undefined;

    const hasHeader = hasContent(label) || Boolean(icon) || Boolean(actionIcon);
    const hasValue = hasContent(value);
    const hasStatus = hasContent(statusLabel);
    const hasHelper = hasContent(helperText);
    const hasChange = hasContent(changeText);

    const classNames = [
        "uds-statistics",
        showAccentRail ? "uds-statistics--with-rail" : "uds-statistics--no-rail",
        `uds-statistics--accent-${accent}`,
        hasChange && `uds-statistics--trend-${trend}`,
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classNames} {...rest}>
            {hasHeader ? (
                <div className="uds-statistics__header">
                    <div className="uds-statistics__bar">
                    </div>
                    <div className="uds-statistics__main">
                        {icon ? (
                            <div className="uds-statistics__icon">
                                <span className="uds-statistics__icon-tile" aria-hidden="true">
                                    <Icon name={icon} size={18} />
                                </span>
                                {hasContent(label) ? (
                                    <Text as="span" variant="body-12" weight="semibold" leading="regular">
                                        {label}
                                    </Text>
                                ) : null}
                            </div>
                        ) : null}

                        {hasStatus ? (
                            <div className="uds-statistics__status">
                                <Status label={statusLabel} appearance="transparent" variant="blue" />
                            </div>
                        ) : null}
                        <div className="uds-statistics__text">
                            {hasValue ? (
                                <div className="uds-statistics__value">
                                    <Text as="p" variant="heading-32" weight="bold" leading="regular">
                                        {value}
                                    </Text>
                                </div>
                            ) : null}

                            {hasHelper ? (
                                <Text as="p" variant="body-12" leading="regular">
                                    {helperText}
                                </Text>
                            ) : null}

                            {hasChange ? (
                                <div className="uds-statistics__change">
                                    <Icon name={TREND_ICON[trend]} size={14} />
                                    <Text as="span" variant="body-12" weight="semibold" leading="regular">
                                        {changeText}
                                    </Text>
                                </div>
                            ) : null}
                        </div>

                        {clampedProgress !== undefined ? (
                            <div className="uds-statistics__progress-row">
                                <ProgressIndicator size="large" value={clampedProgress} className="uds-statistics__progress-indicator" />
                                {hasContent(progressLabel) ? (
                                    <Text as="span" variant="body-12" weight="semibold" leading="regular" className="uds-statistics__progress-label">
                                        {progressLabel}
                                    </Text>
                                ) : null}

                            </div>
                        ) : null}

                    </div>
                    <div className="uds-statistics__meta">
                        {actionIcon ? (
                            <span className="uds-statistics__action-icon" aria-hidden="true">
                                <Icon name={actionIcon} size={24} />
                            </span>
                        ) : null}

                        {hasContent(progressDelta) ? (
                            <Text as="span" variant="body-20" weight="medium" leading="regular" className="uds-statistics__progress-delta">
                                {progressDelta}
                            </Text>
                        ) : null}
                    </div>
                </div>
            ) : null}
        </div>
    );
}
