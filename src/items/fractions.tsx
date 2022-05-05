import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '@collboard/modules-sdk';
import { Translate } from '@collboard/modules-sdk';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 50;
const HEIGHT = 300;

const TEXT_CSS: React.CSSProperties = {
    stroke: 'none',
    strokeWidth: '0',
    fill: montessoriColors.white,
    fontWeight: 'bold',
    fontSize: '15px',
    textAnchor: 'middle',
    lineHeight: '15px',
    dominantBaseline: 'middle',
};

const TEXT_SMALL_CSS: React.CSSProperties = {
    ...TEXT_CSS,
    fontSize: '10px',
    lineHeight: '10px',
};

function generatePiece(fraction: number, color: string): ITrayDynamicItemList {
    return {
        ['fraction' + fraction]: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT / fraction} />
                    {fraction === 1 ? (
                        <text
                            x={WIDTH / 2}
                            y={HEIGHT / fraction / 2 + 2}
                            style={fraction > 6 ? TEXT_SMALL_CSS : TEXT_CSS}
                        >
                            {fraction}
                        </text>
                    ) : (
                        <>
                            <text
                                x={WIDTH / 2}
                                y={HEIGHT / fraction / 2 - (fraction > 6 ? 7 : 12) + 2}
                                style={fraction > 6 ? TEXT_SMALL_CSS : TEXT_CSS}
                            >
                                {1}
                            </text>
                            <line
                                x1={20}
                                x2={WIDTH - 20}
                                y1={HEIGHT / fraction / 2}
                                y2={HEIGHT / fraction / 2}
                                style={{ stroke: montessoriColors.white, strokeWidth: 2 }}
                            />
                            <text
                                x={WIDTH / 2}
                                y={HEIGHT / fraction / 2 + (fraction > 6 ? 6 : 12) + 2}
                                style={fraction > 6 ? TEXT_SMALL_CSS : TEXT_CSS}
                            >
                                {fraction}
                            </text>
                        </>
                    )}
                </g>
            ),
            defaultColor: color,
        },
    };
}

export const pieces = (): ITrayDynamicItemList => ({
    ...generatePiece(12, montessoriColors.green),
    ...generatePiece(10, montessoriColors.purple),
    ...generatePiece(8, montessoriColors.blue),
    ...generatePiece(6, montessoriColors.pink),
    ...generatePiece(4, montessoriColors.green),
    ...generatePiece(3, montessoriColors.yellow),
    ...generatePiece(2, montessoriColors.lightBlue),
    ...generatePiece(1, montessoriColors.red),
});

export function itemsFractions(): ITrayDynamicItemList {
    return {
        ...pieces(),
        fractionStand: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH / 2} height={HEIGHT} />
                    <polygon
                        points={[
                            [0, 0],
                            [WIDTH / 2, 0],
                            [WIDTH / 2, HEIGHT],
                            [WIDTH / 2 + WIDTH, HEIGHT],
                            [WIDTH / 2 + WIDTH, HEIGHT + WIDTH / 2],
                            [-WIDTH, HEIGHT + WIDTH / 2],
                            [-WIDTH, HEIGHT],
                            [0, HEIGHT],
                        ]
                            .map((tuple) => tuple.join(','))
                            .join(' ')}
                    />
                </g>
            ),
            defaultColor: montessoriColors.white,
        },
    };
}

export function toolbarFractions(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / fractions / fractions`}>Zlomky</Translate>,
            itemIds: Object.keys(pieces()),
        },
        { title: <Translate name={`Montessori / fractions / stand`}>Stojan</Translate>, itemIds: ['fractionStand'] },
    ];
}
