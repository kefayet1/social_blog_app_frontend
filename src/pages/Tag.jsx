// import Discussion from "../components/Discussion";
// import LeftSideBar from "../components/homePageContent/leftSide/LeftSideBar";
// import MiddleSide from "../components/homePageContent/middleSide/MiddleSide";

import { Box, CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";

const Discussion = lazy(() => import("../components/Discussion"));
const MiddleSide = lazy(() =>
    import("../components/homePageContent/middleSide/MiddleSide")
);

const Tag = () => {
    return (
        <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center">
            <Box sx={{ display: 'flex' }}><CircularProgress /></Box>
        </div>}>
            <div className="bg-[#F5F5F5] h-screen">
                <div className="lg:w-[70%] mx-auto">
                    {/* tag information */}
                    <div className="taginfo py-3 px-5 m-2 rounded-md bg-white">
                        <div className="main flex items-center justify-between ">
                            <div className="left flex justify-center gap-4">
                                <div className="img">
                                    <img
                                        className="w-20"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAV1BMVEX///9h2vtW2PtT2Pv7/v9j2/vv+//3/f9v3fvq+v513vuv6/1p3Pvj+P647f3I8f2M4/zT9P7Y9f7A7/2c5/yi6Pzl+P6S5Px/4PzN8v6q6v3d9v6N4/zAixclAAAP4klEQVR4nOVd6aKqOAyWsskiKIji0fd/zlH00DRNIS3LuQ7fn5l7xNrQNFuTdLebjHtxzL0P2qY+TB8R4FA3bfgZPD8W91kHd0LS5EJ4EkKI/FHGs4wdl9fn4OroeZPMMrYroqsPJ9RPzLueJo99unrk2P41mmHmjihIej9EF1MWOi5C3zi0X8xGgeWsWiO9b5ob18WIGnJ55dDtPNvGEkk4NKluYqJxmVnciEF6O/wBZ1/GZ/WiOQtsB84Y9D5HnlclMBAxZtXNLC+txi1zDr1PhGuv8p5Jsef5LX9uUWuUVxr2C1JH4KyuhPBFmOeeTzOknzFHzUh6hfC9PA8FUgzivCiFCCdlaqItDnEQBHF0ylpKyor0whj0klJf9drsFHWjHwpVOfjTdT4fOZxTqwiR+EZZJWJchRbEt/zHTZH2B4Xr85mpYk5O1NrHQZFq7ClGdnOkK3c/rXVBX8OfXs8SgZRU5BMVYZ0MMeFJX9+WHvkEB56BFhbAEguj7qm0dfZ/jCP+aM+mNL1PlODXdf5aBlIziWbgsdserbPJONTMVbG/DYzbyKdX0lB3uSD5sEWFhZEIKUvpEOLHhvdnIOWmv46/LN/xKFclR8SuQl+8G6LXP455wFJ6DfLYfAAexPjDpYfowdaIZnUwrFL5cOhEgSXu8g1zbKnoiEylq/LxFX165JikmZzCGg6F3JyCF4Ap1FUULfgMySymr5/IKayhko/9/FLmNy6q0Bb7X5Ed4w+4K5b23zk6UGALOUGug6Dxbv5mjiRX/or4fQiSrVcwQqKeRw3mFgnE2d7Ls7iof7KJXlU9xf7ybrK08oRNeOOOyLtDtd7BRrUGchLLO1BScHG38RsRssAKlaP3dmvVb+QVRJeMBfC3XYdAVVPqP46W4bBr/83lbZBeVAuzY2DAWfenPkNZhzN++qGWF9aSn+wdl4wm2ULo/6J23FsOCHrHyUVmlFQgy7eLdnaQ8nNx9ynurWrh4rec9FV2krbS1B1x36YjlkvDidZpqDDJNlpd4iKZZekDmWiq7j+ohzekx8yYhrSDljZBAMVuLzdWTcvcbZQvojjGhxl7t2G+h2ItCi+c1Mv3UEwEdRV/mYu/odjhp0iry+UAacV9DLSTfQoKfZLGP4mTSNbTTpJi+xBTbToqtbe6Dj2zhEtTLIPF1jbXHbK0UBjceqxqPZsLeBKW1qGSVeAXKCxiuRtv63kSu7an2NJ3goq48zR/4CpbOgTSd3KR9HaQ/rGdvHnAY9C3dIaMLez83GxF/7ifpp1SgWK618BQO9u9QMdZOMHt7d7gppUcDDndHzpPxHDlNBeULjIjgVsW5CVF0JFiHnF0kPLTIZxgCeDTs/VCoKwl1ER3t7yOQL6m5aO30trhm5lQaiFrA7K7eHAHlEamg+VnDfszCSVRBkdAoY5iB5/BmYTFzF0hQ3tMhQw5l1BCMIzNPfOX6niNvAgpJnmKIYbSiZqgEiPgWcnnFdUxZEOesIZrSIrjxN4QkaLa+pjAAVI9hRxhDTexQeUq0ouzlQMZQl5eOUFHjaNAD5Aak7WQWW5lmdu9SlYE8JDHX3AAI5dmjj2CpxjuH0hiW6V8QArr8U0EkwPC6l5Vp1tZ18Uv6rq8narn3wHFjFSBZlVRDQXlsOgKokhNYRNmKI8VUTS8zlJwrZNjXY+o/yCqyuzcprnHqnjQ8fxanrbnrK4MlEsjaJ3ETCmMsJRJqro57oUvHEnFhD9H2h+bokISUpo0bmdf1gDHi70qiarinGr8OQu6UffX4tSb8YWdfpwBfeDHe5n+0S075ovQignP25/bi2wp2ZcP+bwh1WdeXHNDOchCZPvhI5Ph1OXDAW+AM+D1iAVky/9zOnt2Ab8oaVms4So+EZXX8bmshGu9eMreJUvtt+1LrPm+8MJ8n6Zt2x6feDwer/88/5Wm+zz0Xg84SD8h0mxBDeVE7hN1ebonURTHJl0SxHEUJfdTWTuMvhjRUZGa66uVCTxXK4V/sHHoSvgTabfwnN/002Jm9g7KdvynX6ojffyU90ipD7KLUoD4wdO+ie5ldk1DBt1CtOV85kjS4GoV7eeE97SKbsnHd4vg43YvH57H/R6Gx9GpuO69sW0uwpm6KpyOw9z8ZKlzcVf8VODuWh8Nw7Q+hT3ie30e2VjCbyeHr4N6rAI6rzRmupkmzQJ8XVqUKKhyfQoK0TlR7GiBYrziW8/DUOIe9gIF8rUeD4nGJ5S7p1wXJiMS7ig9FAeq7HwX/xUkT+jZ01Ammva18NxoLg3iSvj78wmUeWH/5QC+5ubbtODHcOROfhbuqmZv2NfCs3/VFVXw/XqvedZNApTyIcYF83U8FAKJPPidgUqnbvkP2Z5eaWEubiURXSlnQfgfcnfQf0JsDWStc/gcnEUhWQ/Ky34pumQ5udJW3XBq6r2J8AyCPDJIrsb3wN8nBBqB7FPDHNKYgxWLd9JgEOwoWIQLSj3KpJERTeVUFYotd914Mggvye8oihncKKNwrJT/A1wd29HbaLZ6JX8cRCLAGZJFiZoO4JDCkw8ZffG1bXqhmuNwjPqz3vQgJ9swSc4D3AvMBzGpdxNtxMhjSCqfICDMB38soq33Y3oaMfSjkn9lELcC3DgtBgWOouRyyrCtqcxJNxFFOvjmL7gfkwiNbHEn9hTwEoeSOoJLVdZldRmyB4Hw6kXjmXjJGLoZEQ54z7hsQ4RDxguY02fqNUdsHbK2P3xJf4xng1B4fbhM5rsMvs9C60tgVM0awedBoxxUepd4RkYPolTDKE/Hy8RE8LzxPQ8ZLhjeMkHDJBkVi4p2JJYC5HKLXoHJ2qpww4zX7+zp+SSaTJDW3NjJ9QHXrpObAJUDMw7r5Qw6AmOgmWjBQlpyL+uIfBqsVGfJglcwbq8X6DeI1VMSVJ4SjmESAy572ZMwsZSSj7geF/waWYsbgwdesvEH76JBJKpjQCSet/DzUS3WAUqSQDE+KP4Y7MsXUi8YeoaJYr+ynH7VstDYQikb5RqkDXzrQNJQBvVYmzpqlUHe0xFyFLPmuFZoQsLuoHzIdbRAWksLl5hK6RlrU0e9pRtcZCA1uOkuivJBrjYMMHv8/BlABvhfKlniatrD/YQo8QWmNTI+jQP8BeVrMDAuLAL8NUUHxSKn8cM5ymbRKlm78S3iG7DHpSLvwAu0St8N9PnQxsdIBLIDZUcdqQdtgpXwnYGNA8Ktlr0XsHXj0bkZJC9gUGt3IVx1u14JQOCDYDAwZtgpzm8kum9J7Uded01KeOn73ybV/oUHNg13SgzY2qnV2I6yL3GzEwMoW1B/pbYx/wiZbi+ADl/WTi0WSeQSE7xPgeRXvMj2sSTg8fzuGxBisY9bIJlEloqmHg+U2kkQxfZNMoG1+rscofYXC6hCiUwb5HYFpg0vtYLXJUtPrujv65LBDJuSow8CxVwmq0UO3EwZ0piKlG+75KxJ0+2TKgPi/C4H7UppB+mBlLxtbPKJlGI/l6A/qBJ/i9WJtbzwtI/WHCxt3H2dZFmlqsBlTUBa5ZuJpvZPecgJ0Z460cPXQDFt/gBH1qkQRKuZ3t4ab28fb09Wb1Afb8/mmmRX42D4V9jVlHfBxXf6Tt/lH9sml5DmwlZiIGBDuMa5Ym0+3j8W54JyBvKQEsu0KH7852OZMA6v2jdKQjS/yc7fxKv5OURKt111Wts7k9jeuRPqB/f/O1skettt7/x4l6BZjBuc1jkCeq7Y+9s0R03LEUBvlzxMw3kg6YiAcMoDISyKJfJAUOawSf3ouT6DrtQsuT5igVyfGLdsNCufO35y8Xyu7G/zudbM2bvVt9Vy9ga3wObyMncz5t469j5+Y73c2x2dX+075Fe7BM16AKd2Wn41K1ZJ59Cn/0IOfUTIjg7BjSqb5d0k9MJMdRLutwPa1kmcp9VJ7DZYC/PE3Vjv9E6Jlky9ar2TDNPNXO/0wnBNm3FOK9a0nc706j6/xrn7jIBmvPQDLlq3WBjE1vtDQc4C0TuhVnNjtam7DdYfv/BVNebHeVqkJj+sPgKZ7CMAP5ypj0C+Xh+BF+iyQI3uvlcEcBsn9Iqo/6xXRAd+PxCB+oHYyGsl/Jhye5st0A/kjY31fJlA9Pf29XljY72b3thYf64t9mD72z571z/os/dnvRSP2d/0UvyTfpnnv+yXub2eqNvre7u93sau/au9gf7VIALK6CMiI3+r9K9271Fulqyw+Pnf61G+dB96RloLyAhfow/99u4a2N59EoveGcKs1Fj3zpDt3Quzubt/Zr7fCQZr/9H7nVzu8Nrx7vDic+iqd3g53RL/1fe0be8uvnP/W/Pet2h3Qe6a9y3Ocqfm21mAboZlScqad2pu795U97txoZTCd+OGlnHnFe/GnXD/sVqZ8DX3H0+547o0Rfb/6Tuut3eP+bS76smSzX/8rnpAscvL1VJ7yZqNccRfQ/FOS4wTTsL2iyiOcaXX3m2Y76F4F6vpSbnbKH+zj91+Sml991QubsHIFSkG2snpzEerNnU7Awb98xbXx+421wu47YDn6NNP7VNjg/2UmdaUCeKSrirf3PKhPelJ2E80owwQJ6/eKRLjCOkfWwfHcamZJNna6vpZ0T+W07asdQmOCsHqP1rL3dgnWFn2UXBB4chPuBZXbTBN1+OaIffWpGRqFqTMEDbrolT0d4Iet0WxEf2y8HeF6G1kfyax26kBD+9dDoyaovsWq1VNtYOsINeJLWID1Ckif7vWiWpwiiubaYDQd6DAFjKbiruRL+oWFr3zEOMPuCanzGZe42wRFFnxoiCIoxV/GN8JwONskCOwvOBSsiI4bB2pSgnrXsTvvEpDUN2+RlYEaNnG2ESlp0KLaWmxL0aUTz4cjj88A0DfkzFDM2lxI2D9cAlX//rt2GYBHdSWtz9eAIp0xHHBdrQgveEDLqka2S0gY4qbUzAVMnAz+I5vuOOJaGlfVivlF/kQa4OA6CoJbDulYMV8fFuleIP6ZtfjR3s2NdpSIH1tpbTMHZQcJivvRIRph+zBk9b0x1ROq8QUZqCFByWVRX/PQaG3djFx9C/0JhXPdS50MQELolZRxh/kCi2KOIpvV6ISjDE5oh+w8I835UWptxi5V+3bQ20iJ9riEAdBEEe3rKWKRVidoHC3pc9XvTa7Rd3oh0LlgwmdGRyAwhnCF2GeC0ORCPskjT6JE93oofAHjbfFweuA2dHLu+axQ4QtlgGspZn6uQ11VIMrMahadZTjVe1v2GYVTMeFMzMhMutwcsYrR12nJkTB+CoL0bgcGMRUuxo08vor3M2MsDLgrLzGdVpRM1weOKbcl0NhrsH2PbLhExdxERplmLCJiM2NiLI2Xst7na4rT1dyoYWw7F4zN5ImR43zRP4o52G6uLzmAo2ez9gdwRn34vFrdYZtU88rRC910/6KyPxRzOAP/wc+TccQVMh1tAAAAABJRU5ErkJggg=="
                                        alt=""
                                    />
                                </div>
                                <div className="tagName font-bold text-[#212B36] text-3xl">
                                    <span>React</span>
                                </div>
                            </div>
                            <div className="right">
                                <button className="p-2 font-semibold rounded-md bg-blue-700 text-white text-base">
                                    Follow
                                </button>
                            </div>
                        </div>
                        <div className="body ml-[6.1rem] text-base text-[#212B36]">
                            <p>
                                Official tag for Facebook's React JavaScript
                                library for building user interfaces
                            </p>
                        </div>
                    </div>
                    <div className="py-5 pr-5 pl-3 flex">
                        <div className="left pr-4 hidden lg:w-[20%] md:block md:w-[35%]"></div>
                        <div className="middle  lg:w-[55%] w-full">
                            <MiddleSide />
                        </div>
                        <div className="right  w-[25%] hidden lg:block">
                            <Discussion />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Tag;
