import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from'@collboard/modules-sdk';
import { Translate } from '@collboard/modules-sdk';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 45;

function generatePieces(min: number, max: number) {
    const result: ITrayDynamicItemList = {};

    for (let num = min; num <= max; num++) {
        result['hundredBoard' + num] = {
            content: (
                <g>
                    <rect width={WIDTH} height={WIDTH} x={0} y={0} />
                    <text
                        x={WIDTH / 2}
                        y={WIDTH / 2 + 3}
                        style={{
                            stroke: 'none',
                            strokeWidth: '0',
                            fill: '#000000',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            textAnchor: 'middle',
                            dominantBaseline: 'middle',
                            lineHeight: '20px',
                        }}
                    >
                        {num}
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.white,
        };
    }

    return result;
}

export function itemsHundredBoard(): ITrayDynamicItemList {
    return {
        ...generatePieces(1, 100),
        hundredBoardTable: {
            content: (
                <g>
                    {(() => {
                        const COLS = 10;
                        const ROWS = 10;
                        const result: JSX.Element[] = [
                            <rect
                                width={WIDTH * (COLS + 1)}
                                height={WIDTH * (ROWS + 1)}
                                x={-0.5 * WIDTH}
                                y={-0.5 * WIDTH}
                                style={{ fill: 'white' }}
                                key={-1}
                            ></rect>,
                        ];
                        for (let x = 0; x < COLS; x++) {
                            for (let y = 0; y < ROWS; y++) {
                                result.push(
                                    <rect
                                        width={WIDTH}
                                        height={WIDTH}
                                        x={x * WIDTH}
                                        y={y * WIDTH}
                                        key={x + 'x' + y}
                                    ></rect>,
                                );
                            }
                        }
                        return result;
                    })()}
                </g>
            ),
            defaultColor: montessoriColors.blue,
        },
    };
}

export function toolbarHundredBoard(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / hundred board / hundred board`}>Stovková tabulka</Translate>,
            itemIds: ['hundredBoardTable'],
            scale: 0.2,
        },
        ...[1, 11, 21, 31, 41, 51, 61, 71, 81, 91].map((min) => ({
            title: (
                <>
                    <Translate name={`Montessori / hundred board / numbers`}>Čísla</Translate> {min} - {min + 9}
                </>
            ),
            itemIds: Object.keys(generatePieces(min, min + 9)),
        })),
    ];
}
