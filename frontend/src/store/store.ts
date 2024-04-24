import {configureStore} from '@reduxjs/toolkit';
import projectService from "../services/project.services";
import skillService from "@/services/skill.services";
import clientService from "@/services/client.services";
import heroService from "@/services/hero.services";
import contactService from "@/services/contact.services";
import testimonialService from "@/services/testimonial.services";
import resumeService from "@/services/resume.services";
import navbarService from "@/services/navbar.services";
import footerService from "@/services/footer.services";
import sliderService from "@/services/slider";
import popularClientService from "@/services/popular-clients";


export const store = configureStore({
  reducer: {
    [projectService.reducerPath]: projectService.reducer,
    [skillService.reducerPath]: skillService.reducer,
    [clientService.reducerPath]: clientService.reducer,
    [heroService.reducerPath]: heroService.reducer,
    [contactService.reducerPath]: contactService.reducer,
    [testimonialService.reducerPath]: testimonialService.reducer,
    [resumeService.reducerPath]: resumeService.reducer,
    [navbarService.reducerPath]: navbarService.reducer,
    [footerService.reducerPath]: footerService.reducer,
    [sliderService.reducerPath]: sliderService.reducer,
    [popularClientService.reducerPath]: popularClientService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(projectService.middleware)
    .concat(skillService.middleware)
    .concat(clientService.middleware)
    .concat(heroService.middleware)
    .concat(contactService.middleware)
    .concat(testimonialService.middleware)
    .concat(resumeService.middleware)
    .concat(navbarService.middleware)
    .concat(footerService.middleware)
    .concat(sliderService.middleware)
    .concat(popularClientService.middleware)
});
