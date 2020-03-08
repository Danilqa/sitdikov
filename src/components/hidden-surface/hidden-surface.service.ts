import { HiddenSurface } from './hidden-surface';

export class HiddenSurfaceService {
    private static subscriptions: HiddenSurface[] = [];

    static subscribe(component: HiddenSurface): void {
        HiddenSurfaceService.subscriptions.push(component);
    }

    static showAll(): void {
        HiddenSurfaceService.subscriptions.forEach(component => component.show());
    }

    static hideAll({ except }: { except: HiddenSurface }): void {
        HiddenSurfaceService.subscriptions.forEach(component => {
            if (except !== component) {
                component.hide();
            }
        });
    }
}
