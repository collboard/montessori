import { ITrayDynamicDefinition } from '../../../40-utils/trayModules/interfaces/ITrayDynamicItemTypes';
import { Authors } from '../../../50-systems/ModuleStore/Authors';
import { internalModules } from '../../../50-systems/ModuleStore/internalModules';
import { makeArtModule } from '../../../50-systems/ModuleStore/makers/makeArtModule';
import { makeDynamicTrayModule } from '../../../50-systems/ModuleStore/makers/makeTrayDynamicModule';
import { AbstractTrayArt } from '../../../71-arts/28-AbstractTrayArt';
import { MontessoriItemsGenerator } from './MontessoriItems';

/**
 * Note: In future this file will we in independent repository as external module.
 */

const trayDefinition: ITrayDynamicDefinition = {
    className: 'MontessoriModule',
    imageFolder: 'http://localhost:9980/modules/Montessori',
    getItems: MontessoriItemsGenerator.items.bind(MontessoriItemsGenerator),
    getToolbarItems: MontessoriItemsGenerator.toolbar.bind(MontessoriItemsGenerator),
};

internalModules.declareModule(
    makeDynamicTrayModule({
        manifest: {
            name: 'MontessoriTool',
            title: { en: 'Montessori environments', cs: 'Montessori prostředí' },
            description: {
                en: 'Materiál for teaching mathematics using montessori method of education',
                cs: 'Materiál pro výuku matematiky podle montessori pedagogiky',
            },

            categories: ['Math', 'Education'],
            icon: 'http://localhost:9980/icons/abacus.svg',

            author: Authors.hedu,
            contributors: [Authors.rosecky],
        },
        icon: {
            order: 60,

            icon: 'abacus',
            boardCursor: 'default',
        },
        trayDefinition,
        newArtMaker({ itemId, boardPosition }) {
            return new MontessoriArt(itemId, boardPosition);
        },
    }),
);

internalModules.declareModule(() => makeArtModule(MontessoriArt));

class MontessoriArt extends AbstractTrayArt {
    public static serializeName = 'Montessori';
    public static manifest = {
        // Note+TODO: All modules should be in format @collboard/module-name but we started with art modules
        name: '@collboard/montessori-art',
    };

    getDefinition() {
        return trayDefinition;
    }
}
