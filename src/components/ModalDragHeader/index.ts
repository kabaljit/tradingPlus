import { ModalDragHeader as ModalDragHeaderBare } from './ModalDragHeader';
import type { ModalDragHeaderProps as ModalDragHeaderPropsBare } from './ModalDragHeader.models';

export type ModalDragHeaderProps = Omit<ModalDragHeaderPropsBare, 'theme'>;
export const ModalDragHeader = ModalDragHeaderBare;
