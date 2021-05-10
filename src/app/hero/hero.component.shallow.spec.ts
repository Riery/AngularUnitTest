import { TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";

describe('HeroComponent (shallow tests)', () => {
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent]
        });
        fixture = TestBed.createComponent(HeroComponent);
        //fixture.componentInstance
    });
})