import { declareModule, makeTraySimpleModule, React } from '@collboard/modules-sdk';
import { contributors, description, license, name, repository, version } from '../package.json';

declareModule(
    makeTraySimpleModule({
        manifest: {
            name,
            version,
            description,
            contributors,
            license,
            repository,
        },

        icon: {
            order: 60,
            icon: '📤' /* TODO: !!! Use icon as URL in assets */,
        },
        trayDefinition: [
            {
                // TODO: !!! Mix internal and external assets + NON-image assets
                title: 'Czechia',
                icon: 'https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.42.0/languages/cs.svg',
                groups: [
                    {
                        title: <>Kraje</>,
                        items: [
                            {
                                //title: 'Moravskoslezsky kraj',
                                imageSrc: `https://www.h-edu.cz/media/Ilustrace/illustration-mino-hedu.svg`,
                                //artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                //title: 'Moravskoslezsky kraj',
                                imageSrc: `https://www.h-edu.cz/media/foto/h-edu-team.jpg`,
                                //artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                //title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                //artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    {
                        title: 'Kraje 2',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    {
                        title: 'Kraje 3',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Slovakia',
                icon: 'https://collboard.fra1.cdn.digitaloceanspaces.com/assets/18.42.0/languages/sk.svg',
                groups: [
                    {
                        title: 'Kraje',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                    {
                        title: 'Kraje 2',
                        items: [
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                            {
                                title: 'Moravskoslezsky kraj',
                                imageSrc: `https://raw.githubusercontent.com/collboard/zip-support/main/assets/hello-world-icon.png`,
                                artSrc: 'https://raw.githubusercontent.com/collboard/zip-support/main/samples/simple/sample.txt',
                            },
                        ],
                    },
                ],
            },
        ],
    }),
);
