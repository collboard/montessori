import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '@collboard/modules-sdk';
import { Translate } from '@collboard/modules-sdk';
import { montessoriColors } from '../MontessoriDefaultColors';

const RADIUS = 15;

function generatePearls(pearlsPool: { [key: number]: string }, suffix: string = '') {
    const result: ITrayDynamicItemList = {};

    Object.keys(pearlsPool).forEach((length) => {
        const result2: JSX.Element[] = [];
        for (let x = 0; x < parseInt(length, 10); x++) {
            result2.push(<circle key={x} r={RADIUS} cx={2 * RADIUS * x} cy={0} />);
        }

        result['pearls' + length + suffix] = {
            content: (
                <g>
                    <circle r={RADIUS / 2} cx={-RADIUS * 1.5} cy={0} style={{ fill: 'none' }} />
                    {result2}
                    <circle
                        r={RADIUS / 2}
                        cx={2 * RADIUS * parseInt(length, 10) - RADIUS * 0.5}
                        cy={0}
                        style={{ fill: 'none' }}
                    />
                </g>
            ),
            defaultColor: pearlsPool[length as any],
        };
    });

    return result;
}

export function itemsPearls(): ITrayDynamicItemList {
    return {
        ...generatePearls({
            1: montessoriColors.red,
            2: montessoriColors.green,
            3: montessoriColors.pink,
            4: montessoriColors.yellow,
            5: montessoriColors.lightBlue,
            6: montessoriColors.purple,
            7: montessoriColors.white,
            8: montessoriColors.brown,
            9: montessoriColors.blue,
            10: montessoriColors.gold,
        }),
        ...generatePearls(
            {
                1: montessoriColors.gold,
            },
            'gold',
        ),
        pearls100: {
            content: (
                <g>
                    {(() => {
                        const result: JSX.Element[] = [];
                        for (let y = 0; y < 10; y++) {
                            for (let x = 0; x < 10; x++) {
                                result.push(
                                    <circle key={x + 'x' + y} r={RADIUS} cx={2 * RADIUS * x} cy={2 * RADIUS * y} />,
                                );
                            }
                            result.push(
                                <circle
                                    r={RADIUS / 2}
                                    cx={-RADIUS * 1.5}
                                    cy={2 * RADIUS * y}
                                    style={{ fill: 'none' }}
                                    key={y + '_1'}
                                />,
                            );
                            result.push(
                                <circle
                                    r={RADIUS / 2}
                                    cx={2 * RADIUS * 10 - RADIUS * 0.5}
                                    cy={2 * RADIUS * y}
                                    style={{ fill: 'none' }}
                                    key={y + '_2'}
                                />,
                            );
                        }
                        return result;
                    })()}
                </g>
            ),
            defaultColor: montessoriColors.gold,
        },
        pearls1000: {
            content: (
                <g>
                    {(() => {
                        const result: JSX.Element[] = [];
                        for (let z = 0; z < 10; z++) {
                            for (let x = 0; x < 10; x++) {
                                result.push(
                                    <circle
                                        key={x + 'x' + z}
                                        r={RADIUS}
                                        cx={2 * RADIUS * x + z * RADIUS}
                                        cy={z * RADIUS}
                                    />,
                                );
                                if (x !== 0) {
                                    result.push(
                                        <circle
                                            key={x + 'x' + z + '_2'}
                                            r={RADIUS}
                                            cx={z * RADIUS}
                                            cy={2 * RADIUS * x + z * RADIUS}
                                        />,
                                    );
                                }
                            }
                        }
                        result.push(
                            <rect key={-1} x={10 * RADIUS} y={10 * RADIUS} width={18 * RADIUS} height={18 * RADIUS} />,
                        );
                        for (let y = 0; y < 10; y++) {
                            for (let x = 0; x < 10; x++) {
                                result.push(
                                    <circle
                                        r={RADIUS}
                                        cx={2 * RADIUS * x + 10 * RADIUS}
                                        cy={2 * RADIUS * y + 10 * RADIUS}
                                        key={x + 'x' + y + '_3'}
                                    />,
                                );
                            }
                        }
                        return result;
                    })()}
                </g>
            ),
            defaultColor: montessoriColors.gold,
        },
    };
}

export function toolbarPearls(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / pearls / pearls`}>Perlový materiál</Translate>,
            itemIds: [1, 2, 3, 4, 5, 6].map((n) => 'pearls' + n),
        },
        { title: <></>, itemIds: [7, 8, 9, 10].map((n) => 'pearls' + n) },
        {
            title: <Translate name={`Montessori / pearls / pearls gold`}>Perlový materiál zlatý</Translate>,
            itemIds: ['pearls1gold', 'pearls10'],
        },
        { title: <></>, itemIds: ['pearls100'], scale: 0.3 },
        { title: <></>, itemIds: ['pearls1000'], scale: 0.2 },
    ];
}
