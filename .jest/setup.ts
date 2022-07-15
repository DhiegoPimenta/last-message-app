import '@testing-library/jest-dom'
import 'jest-styled-components'
import 'jest-canvas-mock';

 // correção para os testes do carousel slick
 window.matchMedia = jest.fn().mockImplementation(query => {
   return {
     matches: false,
     media: query,
     onchange: null,
     addListener: jest.fn(),
     removeListener: jest.fn()
   };
 });

 jest.mock('next/router', () => ({
   useRouter() {
     return {
       route: '/',
       pathname: '',
       query: '',
       asPath: ''
     };
   },
   withRouter: (component:any) => {
     component.defaultProps = {
       ...component.defaultProps,
       router: { pathname: 'mocked-path' }
     };
     return component;
   }
 }));
