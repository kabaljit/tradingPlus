import { BoxProps, rowSpacing } from './box.models';
import { Box } from './box';

export const Container: React.FunctionComponent<BoxProps> = (props) =>
  Box({
    flex: 1,
    ...props,
    spacing: Object.assign(
      {},
      {
        top: 3,
        bottom: 3,
        right: 3,
        left: 3,
      },
      props.spacing ?? {}
    ),
  });

export const ContainerNoPadding: React.FunctionComponent<BoxProps> = (props) =>
  Box({
    flex: 1,
    ...props,
  });

export const Row: React.FunctionComponent<
  BoxProps & { variant?: keyof typeof rowSpacing }
> = ({ variant, ...propsRest }) =>
  Box({
    ...propsRest,
    spacing: Object.assign(
      {},
      {
        bottom: variant ? rowSpacing[variant] : 3,
      },
      propsRest.spacing ?? {}
    ),
  });

export const Footer: React.FunctionComponent<BoxProps> = (props) =>
  Box({
    flex: 1,
    ...props,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  });

export const NavBarTransparent: React.FunctionComponent<BoxProps> = (props) =>
  Box({
   
    spacing: Object.assign(
      {},
      {
        left: true,
        top: true,
        right: true,
      },
      props.spacing ?? {}
    ),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...props,
  });
