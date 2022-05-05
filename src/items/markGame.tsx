import React from 'react';
import {
    ITrayDynamicItemList,
    ITrayDynamicToolbarGroup,
} from '@collboard/modules-sdk';
import { Translate } from '@collboard/modules-sdk';
import { montessoriColors } from '../MontessoriDefaultColors';

const WIDTH = 60;
const HEIGHT = 60;

const GAME_PIECE = (
    <path d="M10.798,69.07C6.688,69.125 4.578,69.156 4.464,69.156L4.464,61.144C4.519,58.305 4.856,55.379 5.477,52.366C6.039,49.356 7.084,46.572 8.604,44.017C10.124,41.403 11.28,38.761 12.068,36.092C12.856,33.481 13.137,30.78 12.911,27.996C12.686,25.212 11.814,22.345 10.294,19.391C8.774,16.493 8.323,13.539 8.941,10.526C9.617,7.517 11.308,5.416 14.011,4.223C15.195,3.71 16.378,3.426 17.558,3.37L17.728,3.37C19.026,3.426 20.262,3.71 21.445,4.223C24.205,5.416 25.895,7.517 26.516,10.526C27.134,13.539 26.686,16.493 25.166,19.391C23.642,22.345 22.771,25.212 22.545,27.996C22.32,30.78 22.629,33.481 23.475,36.092C24.263,38.761 25.388,41.403 26.853,44.017C28.376,46.572 29.417,49.356 29.98,52.366C30.601,55.379 30.937,58.305 30.993,61.144L30.993,69.156C30.882,69.156 28.768,69.125 24.656,69.07L10.798,69.07Z" />
);

const GAME_PIECE_CIRCULAR = <circle cx={0} cy={0} r={15} />;

const TEXT_CSS: React.CSSProperties = {
    stroke: 'none',
    strokeWidth: '0',
    fill: montessoriColors.white,
    fontWeight: 'bold',
    fontSize: '20px',
    textAnchor: 'middle',
    lineHeight: '20px',
    dominantBaseline: 'middle',
};

function numbers(): ITrayDynamicItemList {
    return {
        markGameNumber1: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT} />
                    <text x={WIDTH / 2} y={HEIGHT / 2 + 3} style={TEXT_CSS}>
                        1
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.green,
        },
        markGameNumber10: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT} />
                    <text x={WIDTH / 2} y={HEIGHT / 2 + 3} style={TEXT_CSS}>
                        10
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.blue,
        },
        markGameNumber100: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT} />
                    <text x={WIDTH / 2} y={HEIGHT / 2 + 3} style={TEXT_CSS}>
                        100
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.red,
        },
        markGameNumber1000: {
            content: (
                <g>
                    <rect x={0} y={0} width={WIDTH} height={HEIGHT} />
                    <text x={WIDTH / 2} y={HEIGHT / 2 + 3} style={TEXT_CSS}>
                        1000
                    </text>
                </g>
            ),
            defaultColor: montessoriColors.green,
        },
    };
}

function piecesSmall(): ITrayDynamicItemList {
    return {
        markGamePieceSmallGreen: {
            content: GAME_PIECE,
            defaultColor: montessoriColors.green,
        },
        markGamePieceSmallBlue: {
            content: GAME_PIECE,
            defaultColor: montessoriColors.blue,
        },
        markGamePieceSmallRed: {
            content: GAME_PIECE,
            defaultColor: montessoriColors.red,
        },
    };
}

function piecesLarge(): ITrayDynamicItemList {
    return {
        markGamePieceLargeGreen: {
            content: (
                <g transform="scale(2)" style={{ strokeWidth: 1 }}>
                    {GAME_PIECE}
                </g>
            ),
            defaultColor: montessoriColors.green,
        },
    };
}

function piecesCircular(): ITrayDynamicItemList {
    return {
        markGamePieceCircularGreen: {
            content: GAME_PIECE_CIRCULAR,
            defaultColor: montessoriColors.green,
        },
        markGamePieceCircularBlue: {
            content: GAME_PIECE_CIRCULAR,
            defaultColor: montessoriColors.blue,
        },
        markGamePieceCircularRed: {
            content: GAME_PIECE_CIRCULAR,
            defaultColor: montessoriColors.red,
        },
    };
}

export function itemsMarkGame(): ITrayDynamicItemList {
    return {
        ...numbers(),
        ...piecesSmall(),
        ...piecesLarge(),
        ...piecesCircular(),
    };
}

export function toolbarMarkGame(): ITrayDynamicToolbarGroup {
    return [
        {
            title: <Translate name={`Montessori / mark game / mark game`}>Známková hra</Translate>,
            itemIds: Object.keys(numbers()),
        },
        {
            title: <Translate name={`Montessori / mark game / small figures`}>Malé figurky</Translate>,
            itemIds: Object.keys(piecesSmall()),
        },
        {
            title: <Translate name={`Montessori / mark game / tokens`}>Žetonky</Translate>,
            itemIds: Object.keys(piecesCircular()),
        },
        {
            title: <Translate name={`Montessori / mark game / large figure`}>Velká figurka</Translate>,
            itemIds: Object.keys(piecesLarge()),
            scale: 0.75,
        },
    ];
}
