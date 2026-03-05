import Icon from "../Icon/Icon";
import { Text } from "../Text/Text";
import "./_checklist.scss";
import type { ChecklistItem, ChecklistProps } from "./Checklist.types";
import ProgressIndicator from "../ProgressIndicator";

export function Checklist({
    title,
    items,
    activeItemId,
    onItemSelect,
    className = "",
    ...rest
}: ChecklistProps) {
    const resolvedItems = Array.isArray(items) ? items : [];
    const completedCount = resolvedItems.filter((item) => item.completed).length;
    const totalCount = resolvedItems.length;
    const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

    const classNames = ["uds-checklist", className].filter(Boolean).join(" ");

    const handleSelect = (item: ChecklistItem, index: number) => {
        if (!item.disabled) {
            onItemSelect?.(item, index);
        }
    };

    return (
        <aside className={classNames} aria-label="Checklist" {...rest}>
            <div className="uds-checklist__head">
                <div className="uds-checklist__header">
                    <Text as="h3" variant="heading-24" weight="semibold" leading="regular">
                        {title}
                    </Text>
                    <Text as="span" variant="body-14" leading="regular" className="uds-checklist__count">
                        {completedCount}/{totalCount} completed
                    </Text>
                </div>
                <ProgressIndicator value={progress} maxValue={totalCount} size="large" />
            </div>

            <ul className="uds-checklist__list">
                {resolvedItems.map((item, index) => {
                    const isActive = activeItemId === item.id;
                    const isCompleted = Boolean(item.completed);
                    const itemClassNames = [
                        "uds-checklist__item",
                        isCompleted && "uds-checklist__item--completed",
                        isActive && "uds-checklist__item--active",
                        item.disabled && "uds-checklist__item--disabled",
                    ]
                        .filter(Boolean)
                        .join(" ");

                    return (
                        <li key={item.id}>
                            <button
                                type="button"
                                className={itemClassNames}
                                onClick={() => handleSelect(item, index)}
                                disabled={item.disabled}
                                aria-current={isActive ? "step" : undefined}
                            >
                                <span className="uds-checklist__indicator" aria-hidden="true">
                                    {isCompleted ? <Icon name="Check" size={12} appearance="bold" /> : null}
                                </span>
                                <Text as="span" variant="body-16" leading="regular">
                                    {item.label}
                                </Text>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
