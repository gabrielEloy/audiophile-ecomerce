import {getCurrentScreenSize} from './index';

describe('getCurrentScreenSize', () => {
    describe('mobile', () => {
        it('Should return the mobile Dimesion for resolutions <= to 768', () => {
            expect(getCurrentScreenSize(375)).toEqual('mobile')
            expect(getCurrentScreenSize(500)).toEqual('mobile')
            expect(getCurrentScreenSize(767)).toEqual('mobile')
            expect(getCurrentScreenSize(768)).not.toEqual('mobile')
        })
    })

    describe('tablet', () => {
        it('Should return the tablet Dimesion for resolutions <= to 1440px and >= 768px', () => {
            expect(getCurrentScreenSize(767)).not.toEqual('tablet')
            expect(getCurrentScreenSize(768)).toEqual('tablet')
            expect(getCurrentScreenSize(1439)).toEqual('tablet')
            expect(getCurrentScreenSize(1440)).not.toEqual('tablet')
        })
    })

    describe('mobile', () => {
        it('Should return the deskton Dimesion for resolutions >= 1440px', () => {
            expect(getCurrentScreenSize(1439)).not.toEqual('desktop')
            expect(getCurrentScreenSize(1440)).toEqual('desktop')
            expect(getCurrentScreenSize(2000)).toEqual('desktop')
        })
    })
})