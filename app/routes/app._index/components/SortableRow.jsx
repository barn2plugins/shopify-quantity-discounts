import {
  Text,
  Icon,
} from "@shopify/polaris";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {SortIcon} from '@shopify/polaris-icons';

import {getApplyToText} from "../../../utils/utils";

export default function SortableRow({ bundle, index, handleBundleToggle, renderRowActions  }) {
  const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
	} = useSortable({ id: bundle.id });

  const style = {
		transform: CSS.Translate.toString(transform),
		transition,
	};

  return (
    <tr ref={setNodeRef} style={style} id={bundle.id} key={bundle.id} position={index} className="discounts_table_row">
      <td className="col-sort-icon" {...attributes} {...listeners}>
        <Icon source={SortIcon} tone="subdued" />
      </td>
      <td className="col-priority">
        <Text variation="strong">{bundle.priority}</Text>
      </td>
      <td className="col-bundle-name">
        <Text>{bundle.name}</Text>
      </td>
      <td className="col-bundle-type">
        { bundle.type === 'volume_bundle' ? 'Volume bundle' : 'Bulk pricing' }
      </td>
      <td className="col-applied-to">
        {getApplyToText(bundle)}
      </td>
      <td className="col-status">
        <div className="toggle-switcher">
          <input 
            type="checkbox" 
            id={`switch-${bundle.id}`}
            name={`preview-${bundle.id}`}
            value={bundle.active}
            checked={bundle.active}
            onChange={(event) => handleBundleToggle(event, bundle)}
          />
          <label htmlFor={`switch-${bundle.id}`}>Toggle</label>
        </div>
      </td>
      <td className="col-actions" alignment="right">
        {renderRowActions(bundle)}
      </td>
    </tr>
  )
}