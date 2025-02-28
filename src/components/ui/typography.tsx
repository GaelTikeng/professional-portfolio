import { cn } from '@/lib/utils';
import { tv, type VariantProps } from 'tailwind-variants';

export const typographyVariants = tv({
  base: 'scroll-m-20',
  variants: {
    variant: {
      h1: 'text-3xl lg:text-4xl',
      h2: 'text-2xl',
      h3: 'text-xl',
      h4: 'text-lg',
      h5: 'text-base',
      h6: 'text-sm',
      body1: 'text-base',
      body2: 'text-sm',
      body3: 'text-xs',
      body4: 'text-[8px]',
    },
    muted: {
      true: 'text-muted-foreground',
      false: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'body1',
    muted: false,
  },
});

type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants>;

export function Typography({ variant, muted, className, ...rest }: TypographyProps) {
  switch (variant) {
    case 'h1':
      return (
        <h1
          className={cn(
            typographyVariants({ variant, muted }),
            'font-semibold',
            className
          )}
          {...rest}
        />
      );
    case 'h2':
      return (
        <h2
          className={cn(
            typographyVariants({ variant, muted }),
            'font-semibold',
            className
          )}
          {...rest}
        />
      );
    case 'h3':
      return (
        <h3
          className={cn(
            typographyVariants({ variant, muted }),
            'font-semibold',
            className
          )}
          {...rest}
        />
      );
    case 'h4':
      return (
        <h4
          className={cn(
            typographyVariants({ variant, muted }),
            'font-semibold',
            className
          )}
          {...rest}
        />
      );
    case 'h5':
      return (
        <h5 className={cn(typographyVariants({ variant, muted }), className)} {...rest} />
      );
    case 'h6':
      return (
        <h6 className={cn(typographyVariants({ variant, muted }), className)} {...rest} />
      );
    default:
      return (
        <p className={cn(typographyVariants({ variant, muted }), className)} {...rest} />
      );
  }
}
