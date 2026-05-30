import LandingLayout from "app/layouts/Landing";

const publicRoutes = {
    id: "public",
    children: [
        {
            Component: LandingLayout,
            children: [
                {
                    path: "/",
                    lazy: async () => ({
                        Component: (await import("app/pages/public/home/Home")).default,
                    }),
                },
                {
                    path: "/about",
                    lazy: async () => ({
                        Component: (await import("app/pages/public/about")).default,
                    }),
                },
            ],
        },
    ],
};

export { publicRoutes };