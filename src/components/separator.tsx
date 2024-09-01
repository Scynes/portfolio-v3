export const Separator = ({ orientation }: { orientation: 'horizontal' | 'vertical' }) => {

    return <div className={ `${ orientation === 'horizontal' ? 'w-full h-[1px]' : 'h-auto w-[1px]' } bg-[#1E2D3D]` }/>
}