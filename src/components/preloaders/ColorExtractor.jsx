import { ColorExtractor as ColorExtractorFromLib } from 'react-color-extractor';

export const ColorExtractor = ({ children, setBackdrop }) => {
    return (<ColorExtractorFromLib
        rgb
        getColors={(colors) => {
            setBackdrop({
                background: `linear-gradient(to right, rgb(${colors[5][0]}, ${colors[5][1]}, ${colors[5][2]}) 150px, rgba(${colors[2][0]}, ${colors[2][0]}, ${colors[2][0]}, 0.84) 100%)`,
                color: `#fff`,
            });
        }}
    >
        {children}
        </ColorExtractorFromLib>
    )
}