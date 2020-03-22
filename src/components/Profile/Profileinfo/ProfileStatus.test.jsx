import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe("ProfileStatusComponent", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />); //create - fake render </>
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra");
    });
});

describe("ProfileStatusComponent", () => {
    test("span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.InnerText).not.toBeBull();
    });
});

describe("ProfileStatusComponent", () => {
    test(" after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
});

describe("ProfileStatusComponent", () => {
    test("span should contain correct value", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra");
    });
});

describe("ProfileStatusComponent", () => {
    test("input should be in edit mode instead of <span>", () => {
        const component = create(<ProfileStatus status="it-kamasutra" />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")

        expect(input.value).toBe("it-kamasutra");
    });
});

describe("ProfileStatusComponent", () => {
    test("callback should be called", () => {
        const mockCallback = jest.fn() //funciton that look for callbacks
        const component = create(<ProfileStatus status="it-kamasutra" updateStatus={mockCallback} />);
        const instance = component.getInstance()
        instance.deactivateEditMode()

        expect(mockCallback.mock.calls.length).toBe(1) //checks how many times mock was called
    });
});