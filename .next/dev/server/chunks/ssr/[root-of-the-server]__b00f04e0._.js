module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnquiryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/react-ga4/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function EnquiryModal({ isOpen, onClose, title = "Download Brochure", subtitle = "Enter your name and number to download the brochure instantly", openedEventTitle = "contact_form_opened", submitEventTitle = "contact_form_submit" }) {
    // initialize GA (client-side only)
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3J8R39GCCX";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (GA_MEASUREMENT_ID) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].initialize(GA_MEASUREMENT_ID);
        }
    }, [
        GA_MEASUREMENT_ID
    ]);
    // track modal open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (GA_MEASUREMENT_ID && isOpen) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].event({
                category: "Engagement",
                action: openedEventTitle,
                label: title
            });
        }
    }, [
        GA_MEASUREMENT_ID,
        isOpen,
        title
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (GA_MEASUREMENT_ID && isOpen) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].event({
                category: "Engagement",
                action: "contact_form_opened",
                label: title
            });
        }
    }, [
        GA_MEASUREMENT_ID,
        isOpen,
        title
    ]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        countryCode: "+91",
        phone: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFormValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!formData.name) return false;
        if (!formData.phone) return false;
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(formData.phone);
    }, [
        formData.name,
        formData.phone
    ]);
    const utmParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return {};
        //TURBOPACK unreachable
        ;
        const params = undefined;
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isFormValid) return;
        const phoneNumber = formData.countryCode + formData.phone;
        const payload = {
            name: formData.name.trim().toLowerCase(),
            phoneNumber: phoneNumber.trim(),
            campaign: true,
            projectId: "",
            projectName: "Godrej Thanisandra",
            currentAgent: "Inzamam",
            utmDetails: {
                source: utmParams.utmSource || null,
                medium: utmParams.utmMedium || null,
                campaign: utmParams.utmCampaign || null,
                keyword: utmParams.utmKeyword || null
            }
        };
        setLoading(true);
        try {
            const response = await fetch("https://google-campaign-leads-service-dot-iqol-crm.uc.r.appspot.com/handleMultipleCampaignData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log("Success:", result);
            // GA conversion event on successful submit
            if (GA_MEASUREMENT_ID) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].event({
                    category: "Conversion",
                    action: submitEventTitle,
                    label: title,
                    value: 1
                });
            }
            if (GA_MEASUREMENT_ID) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].event({
                    category: "Conversion",
                    action: "contact_form_submit",
                    label: title,
                    value: 1
                });
            }
            // reset form
            setFormData({
                name: "",
                countryCode: "+91",
                phone: ""
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("We received your info. Expect a response soon!");
            onClose();
        } catch (error) {
            console.error("Error submitting form:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Something went wrong. Please try again later.");
        } finally{
            setTimeout(()=>setLoading(false), 1000);
        }
        console.log("Form submitted:", formData);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50 backdrop-blur-sm",
            onClick: onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full md:max-w-[513px] bg-white rounded-md shadow-2xl max-h-[90vh] overflow-y-auto",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 bg-[#F7F1F7] px-4 md:px-5 py-5.5 flex items-center justify-between border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/godrej-logo.png",
                                alt: "Godrej Logo",
                                className: "h-6 md:h-9 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors",
                                "aria-label": "Close modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M15 5L5 15M5 5L15 15",
                                        stroke: "#2C2C2C",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 md:px-8 py-4.5 md:py-4.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-4xl font-bold mb-3 text-[#221628] font-['Urbanist']",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#5A5555] text-sm md:text-md mb-3 font-medium font-['Urbanist']",
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-[#221628] text-md font-medium mb-1 font-['Urbanist']",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                value: formData.name,
                                                onChange: (e)=>setFormData({
                                                        ...formData,
                                                        name: e.target.value
                                                    }),
                                                placeholder: "Enter Your Name",
                                                className: "w-full px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] placeholder:text-[#7A7B7C] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] font-normal text-base",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "phone",
                                                className: "block text-[#221628] text-md font-medium mb-1 font-['Urbanist']",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1.5 md:gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: formData.countryCode,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                countryCode: e.target.value
                                                            }),
                                                        className: " w-20 md:w-32 px-2 md:px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] text-base bg-white appearance-none cursor-pointer",
                                                        style: {
                                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23575556' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "right 1rem center",
                                                            paddingRight: "2.5rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "+91",
                                                                children: "+91"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "+1",
                                                                children: "+1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "+44",
                                                                children: "+44"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "+971",
                                                                children: "+971"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        id: "phone",
                                                        value: formData.phone,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                phone: e.target.value
                                                            }),
                                                        placeholder: "0000000000",
                                                        maxLength: 10,
                                                        pattern: "[0-9]{10}",
                                                        className: "flex-1 w-full px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] placeholder:text-[#7A7B7C] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] text-base",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "w-full bg-primary  text-white py-3.5 px-5 rounded-[8px] font-bold text-base font-['Urbanist'] transition-colors duration-300 shadow-lg mt-9",
                                        disabled: loading,
                                        children: loading ? "Submitting..." : "Enquire"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/temp test/src/components/EnquiryModal.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/temp test/src/components/navigation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Navigation() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastClickedIndex, setLastClickedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close menu when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            const target = event.target;
            if (menuRef.current && target && !menuRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [
        isOpen
    ]);
    const menuItems = [
        {
            href: "#overview",
            label: "Overview"
        },
        {
            href: "#configuration",
            label: "Configuration"
        },
        {
            href: "#location",
            label: "Location"
        },
        {
            href: "#gallery",
            label: "Gallery"
        },
        {
            href: "#master-plan",
            label: "Master Plan"
        },
        {
            href: "#amenities",
            label: "Amenities"
        },
        {
            href: "#faqs",
            label: "FAQs"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: menuRef,
                className: "sticky top-0 z-50 bg-white border-b border-neutral-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center h-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen(!isOpen),
                                            className: "md:hidden p-2 border border-[#CCCBCB] rounded-md hover:bg-gray-50 transition cursor-pointer",
                                            "aria-label": "Toggle menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 49,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/godrej-logo.png",
                                                alt: "Godrej Logo",
                                                className: "w-[66px] h-8 lg:w-[75px] lg:h-9 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 65,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                    lineNumber: 47,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden md:flex gap-8 text-[#2B2928] font-semibold font-['Urbanist']",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#overview",
                                            className: "hover:text-primary transition",
                                            children: "Overview"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 76,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#configuration",
                                            className: "hover:text-primary transition",
                                            children: "Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 79,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#location",
                                            className: "hover:text-primary transition",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 82,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#gallery",
                                            className: "hover:text-primary transition",
                                            children: "Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 85,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#master-plan",
                                            className: "hover:text-primary transition",
                                            children: "Master Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 88,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-primary text-white px-4 sm:px-6 py-2 rounded-[4px] hover:bg-primary-light transition font-semibold font-['Urbanist'] text-sm sm:text-base cursor-pointer",
                                    onClick: ()=>setIsModalOpen(true),
                                    children: "Enquire Now"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                    lineNumber: 94,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-4 border-t border-neutral-200 bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            onClick: ()=>{
                                                setIsOpen(false);
                                                setLastClickedIndex(index);
                                            },
                                            className: `text-[#2B2928] font-[urbanist] text-[16px] font-medium py-3 px-2 hover:bg-[#F7F1F7] hover:text-primary transition-colors ${index === lastClickedIndex ? 'bg-[#F7F1F7]' : ''}`,
                                            children: item.label
                                        }, item.href, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                            lineNumber: 102,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                lineNumber: 44,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                title: "Enquire Now",
                subtitle: "Fill out the form below and our team will get back to you shortly.",
                openedEventTitle: "Contact_form_opened_navbar",
                submitEventTitle: "Contact_form_submit_navbar"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/navigation.tsx",
                lineNumber: 128,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/temp test/src/components/hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Hero() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "overview",
        className: "relative max-w-7xl rounded-sm mx-auto h-[458px] md:h-[560px] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-cover bg-center",
                style: {
                    backgroundImage: `url('assets/tr.png')`
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col justify-center items-center md:items-start max-w-6xl mx-auto px-4 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-center md:text-left items-center md:items-start max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#D99B2A]/60 backdrop-blur-sm flex gap-2 items-center w-fit mx-auto md:mx-0 border border-[#D99B2A] px-3 py-1.5 rounded-full text-sm md:text-base font-bold font-['Plus_Jakarta_Sans'] mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 15 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_1_662)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M8.98562 0.487184L9.85656 1.12468C10 1.22968 10.1669 1.29906 10.3422 1.32625L11.4091 1.49031C11.9369 1.57146 12.4252 1.81884 12.8029 2.1965C13.1805 2.57416 13.4279 3.06242 13.5091 3.59031L13.6722 4.65812C13.6994 4.83343 13.7687 5.00031 13.8737 5.14375L14.5112 6.01375C14.8277 6.44453 14.9984 6.96513 14.9984 7.49968C14.9984 8.03424 14.8277 8.55483 14.5112 8.98562L13.8737 9.85562C13.7683 9.99883 13.6992 10.1655 13.6722 10.3412L13.5081 11.4081C13.4271 11.9363 13.1797 12.4249 12.8018 12.8027C12.4239 13.1806 11.9354 13.428 11.4072 13.5091L10.3403 13.6731C10.1645 13.6999 9.99782 13.7691 9.85468 13.8747L8.98468 14.5122C8.55389 14.8287 8.0333 14.9994 7.49875 14.9994C6.96419 14.9994 6.4436 14.8287 6.01281 14.5122L5.14281 13.8747C4.9996 13.7692 4.83297 13.7001 4.65718 13.6731L3.59031 13.5091C3.06242 13.4279 2.57416 13.1805 2.1965 12.8029C1.81884 12.4252 1.57146 11.9369 1.49031 11.4091L1.32625 10.3422C1.29942 10.1664 1.23025 9.9997 1.12468 9.85656L0.487184 8.98656C0.170683 8.55577 0 8.03518 0 7.50062C0 6.96606 0.170683 6.44547 0.487184 6.01468L1.12468 5.14468C1.22968 5.00125 1.29906 4.83437 1.32625 4.65906L1.49031 3.59031C1.57146 3.06242 1.81884 2.57416 2.1965 2.1965C2.57416 1.81884 3.06242 1.57146 3.59031 1.49031L4.65812 1.32625C4.83343 1.29906 5.00031 1.22968 5.14375 1.12468L6.01375 0.487184C6.44453 0.170683 6.96513 0 7.49968 0C8.03424 0 8.55483 0.170683 8.98562 0.487184ZM6.84625 1.61968L5.97718 2.25718C5.65096 2.49725 5.27134 2.65456 4.87093 2.71562L3.805 2.87875C3.57234 2.91437 3.35712 3.02332 3.19069 3.18975C3.02426 3.35619 2.9153 3.5714 2.87968 3.80406L2.71656 4.86906C2.65525 5.2694 2.49796 5.64895 2.25812 5.97531L1.62062 6.84531C1.48183 7.03491 1.40701 7.26378 1.40701 7.49875C1.40701 7.73372 1.48183 7.96258 1.62062 8.15218L2.25812 9.02125C2.49812 9.3475 2.65562 9.72718 2.71656 10.1275L2.87968 11.1934C2.95281 11.6706 3.32781 12.0456 3.805 12.1187L4.87 12.2819C5.27041 12.3429 5.65002 12.5002 5.97625 12.7403L6.84625 13.3778C7.23437 13.6637 7.76406 13.6637 8.15312 13.3778L9.02218 12.7403C9.34841 12.5002 9.72802 12.3429 10.1284 12.2819L11.1944 12.1187C11.427 12.083 11.6421 11.974 11.8085 11.8076C11.9749 11.6412 12.0839 11.426 12.1197 11.1934L12.2828 10.1284C12.3439 9.72802 12.5012 9.34841 12.7412 9.02218L13.3787 8.15218C13.5181 7.96282 13.5933 7.73386 13.5933 7.49875C13.5933 7.26363 13.5181 7.03468 13.3787 6.84531L12.7412 5.97625C12.5017 5.64972 12.3444 5.27025 12.2828 4.87L12.1197 3.80406C12.0841 3.5714 11.9751 3.35619 11.8087 3.18975C11.6422 3.02332 11.427 2.91437 11.1944 2.87875L10.1294 2.71562C9.72903 2.65431 9.34948 2.49702 9.02312 2.25718L8.15312 1.61968C7.96375 1.48034 7.7348 1.40517 7.49968 1.40517C7.26457 1.40517 7.03561 1.48034 6.84625 1.61968ZM10.5747 6.35593L7.05906 9.87156C6.92722 10.0032 6.74851 10.0772 6.56218 10.0772C6.37585 10.0772 6.19714 10.0032 6.06531 9.87156L4.42468 8.23093C4.30055 8.09756 4.23295 7.92127 4.2361 7.73909C4.23925 7.55692 4.31289 7.38306 4.44156 7.25406C4.57056 7.12539 4.74442 7.05175 4.92659 7.0486C5.10877 7.04545 5.28506 7.11305 5.41843 7.23718L6.56218 8.38093L9.58093 5.36218C9.7143 5.23805 9.8906 5.17045 10.0728 5.1736C10.2549 5.17675 10.4288 5.25039 10.5578 5.37906C10.6865 5.50806 10.7601 5.68192 10.7633 5.86409C10.7664 6.04627 10.6988 6.22256 10.5747 6.35593Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_1_662",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "15",
                                                    height: "15",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                "NEW LAUNCH"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[36px] md:text-5xl lg:text-[58px] font-extrabold font-['Urbanist'] mb-4 leading-tight drop-shadow-2xl",
                            children: "Premium apartment project in Whitefield"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[16px] md:text-lg lg:text-lg mb-8 text-gray-200 font-['Urbanist'] font-bold drop-shadow-lg",
                            children: "Exclusive price for first 100 customers"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-white text-primary text-base md:text-lg px-6 md:px-8 py-3 rounded-[4px] font-['Urbanist'] font-semibold cursor-pointer mx-auto md:mx-0 block md:inline-block",
                            onClick: ()=>setIsModalOpen(true),
                            children: "Enquire Now"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                title: "Enquire Now",
                subtitle: "Fill out the form below and our team will get back to you shortly.",
                onClose: ()=>setIsModalOpen(false),
                isOpen: isModalOpen,
                openedEventTitle: "Contact_form_opened_hero_banner",
                submitEventTitle: "Contact_form_submit_hero_banner"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/temp test/src/components/hero.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/quick-stats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuickStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function QuickStats() {
    const stats = [
        {
            label: "Price",
            value: "₹1.1 Cr - ₹4.2 Cr"
        },
        {
            label: "Configuration",
            value: "1,2,3 & 4 BHK"
        },
        {
            label: "Project Size",
            value: "24 Acre"
        },
        {
            label: "Possession",
            value: "2029"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " bg-[#FFFFFFCF] rounded-lg md:rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] backdrop-blur-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 sm:px-6 md:px-8 py-6 md:py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",
                    children: stats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-center font-['Urbanist'] ${index < stats.length - 1 && index % 2 !== 1 ? 'border-r border-[#4F4B4B]' : ''} ${index % 2 === 1 && index < 2 ? 'md:border-r md:border-[#4F4B4B]' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#575556] text-sm md:text-base lg:text-lg font-medium mb-1 md:mb-2",
                                    children: stat.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
                                    lineNumber: 23,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#221628] text-base md:text-xl lg:text-2xl font-bold",
                                    children: stat.value
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
                            lineNumber: 15,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/quick-stats.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/introduction.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Introduction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Introduction() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Download Brochure");
    const cameraIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        stroke: "#BC9043",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 6.375H4.3125M4.3125 6.375C4.6606 6.375 4.99444 6.51328 5.24058 6.75942C5.48672 7.00556 5.625 7.3394 5.625 7.6875C5.625 8.0356 5.48672 8.36944 5.24058 8.61558C4.99444 8.86172 4.6606 9 4.3125 9H2.25M4.3125 6.375C4.6606 6.375 4.99444 6.23672 5.24058 5.99058C5.48672 5.74444 5.625 5.4106 5.625 5.0625C5.625 4.7144 5.48672 4.38056 5.24058 4.13442C4.99444 3.88828 4.6606 3.75 4.3125 3.75H2.25M15.75 11.25C15.75 13.7355 12.7275 15.75 9 15.75C5.2725 15.75 2.25 13.7355 2.25 11.25M10.5 3.75H9.75C9.15326 3.75 8.58097 3.98705 8.15901 4.40901C7.73705 4.83097 7.5 5.40326 7.5 6V7.5M7.5 7.5C7.5 7.89782 7.65803 8.27936 7.93934 8.56066C8.22064 8.84196 8.60217 9 9 9H9.375C9.77282 9 10.1544 8.84196 10.4357 8.56066C10.717 8.27936 10.875 7.89782 10.875 7.5V7.125C10.875 6.72718 10.717 6.34564 10.4357 6.06434C10.1544 5.78304 9.77282 5.625 9.375 5.625H9C8.60217 5.625 8.22064 5.78304 7.93934 6.06434C7.65803 6.34564 7.5 6.72718 7.5 7.125V7.5ZM12.75 6.375V5.25C12.75 4.85218 12.908 4.47064 13.1893 4.18934C13.4706 3.90804 13.8522 3.75 14.25 3.75H14.625C15.0228 3.75 15.4044 3.90804 15.6857 4.18934C15.967 4.47064 16.125 4.85218 16.125 5.25V7.5C16.125 7.89782 15.967 8.27936 15.6857 8.56066C15.4044 8.84196 15.0228 9 14.625 9H14.25C13.8522 9 13.4706 8.84196 13.1893 8.56066C12.908 8.27936 12.75 7.89782 12.75 7.5V6.375Z",
            stroke: "stroke='#BC9043'",
            "stroke-width": "1.5625",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, void 0, false, {
            fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
            lineNumber: 12,
            columnNumber: 1
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-20 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2  lg:gap-12 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[500px] md:h-[600px] hidden md:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-[80%] h-[80%] z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/introduction/image3.jpeg",
                                            alt: "Godrej Aerial View",
                                            className: "w-full h-full object-cover rounded-[4px] shadow-lg hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                            lineNumber: 25,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 right-0 w-[55%] h-[50%] z-20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/introduction/image2.png",
                                            alt: "Godrej Residential Building",
                                            className: "w-full h-full object-cover rounded-[4px] shadow-xl  hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-6 text-[#221628] font-['Urbanist']",
                                        children: "Launching Soon - Prestige Raintree Phase 2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#575556] mb-4 leading-relaxed text-sm md:text-md font-['Urbanist']",
                                        children: "For nearly four decades, Prestige Group has been synonymous with excellence, innovation, and trust in creating landmark developments across South India. We bring this unwavering commitment to crafting homes that redefine luxury living. Prestige Raintree Park is a new ultra-luxury, integrated residential project located in the prime micro-market of Whitefield, East Bangalore."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#575556] mb-8 leading-relaxed text-sm md:text-md font-['Urbanist']",
                                        children: "Spanning an expansive 24+ acres (for the New Launch Residential Phase), this development is a fusion of residential luxury and urban convenience. The residential towers are meticulously planned, designed to offer an impressive 75-80% open landscaped spaces and a focus on natural light and ventilation across all towers. "
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-[11px] md:gap-4 flex-wrap mb-6 md:mb-8 w-full justify-between md:py-2 font-['Urbanist']",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-primary text-md  text-white px-4 md:px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]",
                                                onClick: ()=>{
                                                    setIsModalOpen(true);
                                                    setTitle("Download Brochure");
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/download.svg",
                                                        alt: "Brochure Icon",
                                                        className: "w-3.5 h-3.5 md:w-4.5 md:h-4.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Download Brochure"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "border text-md border-primary text-primary px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]",
                                                onClick: ()=>{
                                                    setIsModalOpen(true);
                                                    setTitle("Virtual Tour");
                                                },
                                                children: [
                                                    cameraIcon,
                                                    "Virtual Tour"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border mb-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-6 font-['Urbanist']",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg md:text-[42px] font-bold text-gray-900 mb-2",
                                                        children: "40+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-[#575556]",
                                                        children: "Years of Trust"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg md:text-[42px] font-bold text-gray-900 mb-2",
                                                        children: "280+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-[#575556]",
                                                        children: "Projects Delivered"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg md:text-[42px] font-bold text-gray-900 mb-2",
                                                        children: "175M+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-md text-[#575556]",
                                                        children: "Sqft Developed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                title: title,
                subtitle: title === "Download Brochure" ? "Enter your name and number to get the brochure download instantly" : "Experience a virtual tour of our premium villa plots.",
                openedEventTitle: title === "Download Brochure" ? "Contact_form_opend_overview_1" : "Contact_form_opend_overview_2",
                submitEventTitle: title === "Download Brochure" ? "Contact_form_submit_overview_1" : "Contact_form_submit_overview_2"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/introduction.tsx",
                lineNumber: 97,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/temp test/src/components/why-choose.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChoose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function WhyChoose() {
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mobileExpandedIndex, setMobileExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const images = [
        {
            title: "Clubhouse",
            src: "/assets/projecthighlights/swimmingpool.png",
            description: "Surrounded by nature with expansive green landscapes"
        },
        {
            title: "Metro Station",
            src: "/assets/projecthighlights/metro.png",
            description: "Beautiful tree-lined pathways and open spaces"
        },
        {
            title: "Lush Greenary",
            src: "/assets/projecthighlights/lushgreen.png",
            description: "Eco-friendly environment with sustainable design"
        },
        {
            title: "70+ Amenities",
            src: "/assets/projecthighlights/gym.png",
            description: "Premium landscaping throughout the community"
        },
        {
            title: "Open Spaces",
            src: "/assets/projecthighlights/openspaces.png",
            description: "Serene living spaces with natural beauty"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 md:py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-4xl lg:text-[44px]  mb-3 md:mb-4 font-extrabold font-['Urbanist'] text-[#221628]",
                            children: "Why Residents Choose Prestige"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#433F3E] font-medium font-['Urbanist'] text-[14px] md:text-base lg:text-lg max-w-2xl",
                            children: "A perfect blend of location, lifestyle, and legacy that residents truly love."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex gap-4 h-[500px]",
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative overflow-hidden rounded-2xl max-h-[477px] cursor-pointer transition-all duration-700 ease-in-out ${expandedIndex === index ? "flex-3" : "flex-[0.7] hover:flex-[0.8]"}`,
                            onClick: ()=>setExpandedIndex(index),
                            onMouseEnter: ()=>setExpandedIndex(index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src || "/placeholder.svg",
                                    alt: image.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-liner-to-t from-black/80 via-black/20 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-white font-semibold transition-all duration-500 ${expandedIndex === index ? "text-lg mb-2" : "text-lg"}`,
                                        children: image.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex gap-3 h-[400px] overflow-x-auto",
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 ease-in-out shrink-0 ${mobileExpandedIndex === index ? "w-[70vw]" : "w-[35vw]"}`,
                            onClick: ()=>setMobileExpandedIndex(index),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image.src || "/placeholder.svg",
                                    alt: image.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-liner-to-t from-black/80 via-black/20 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-white font-semibold transition-all duration-500 ${mobileExpandedIndex === index ? "text-xl mb-2" : "text-base"}`,
                                        children: image.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex justify-center gap-2 mt-4",
                    children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMobileExpandedIndex(index),
                            className: `h-2 rounded-full transition-all duration-300 ${mobileExpandedIndex === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300"}`,
                            "aria-label": `View image ${index + 1}`
                        }, index, false, {
                            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/why-choose.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/pricing-plots.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingPlots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function PricingPlots() {
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [clickedIndex, setClickedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const plots = [
        {
            price: "₹1.1 Cr+",
            size: "1 BHK (650 Sq. Ft)"
        },
        {
            price: "₹2 Cr+",
            size: "2 BHK (1200 Sq. Ft)"
        },
        {
            price: "₹2.5 Cr+",
            size: "3 BHK (1500 Sq. Ft)"
        },
        {
            price: "₹3 Cr+",
            size: "3 BHK (1750–1950 Sq. Ft)"
        },
        {
            price: "₹3.4 Cr+",
            size: "3 BHK (2000–2050 Sq. Ft)"
        },
        {
            price: "₹3.8 - 4.2 Cr+",
            size: "4 BHK (2300–2500 Sq. Ft)"
        }
    ];
    const checkScroll = ()=>{
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
            // Calculate active index based on scroll position
            const cardWidth = 280 + 24 // card width + gap
            ;
            const currentIndex = Math.round(scrollLeft / cardWidth);
            setActiveIndex(currentIndex);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkScroll();
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener("scroll", checkScroll);
            window.addEventListener("resize", checkScroll);
            return ()=>{
                scrollContainer.removeEventListener("scroll", checkScroll);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, []);
    const scroll = (direction)=>{
        if (scrollRef.current) {
            const scrollAmount = 350;
            const newScrollLeft = direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "configuration",
                className: "py-12 md:py-20 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 md:px-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-4 text-[#221628] font-['Urbanist']",
                                    children: "Choose Your Apartment"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                    lineNumber: 68,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl",
                                    children: "Select from our range of thoughtfully designed 1 ,2, 3 & 4 BHK residences, each crafted to elevate your urban living experience."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                    lineNumber: 71,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                            lineNumber: 67,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: scrollRef,
                                    className: "flex gap-8 overflow-x-auto scroll-smooth p-1 items-center scrollbar-hide snap-x snap-mandatory",
                                    style: {
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none"
                                    },
                                    children: plots.map((plot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 w-[280px] md:w-[320px] bg-white  rounded-[4px] p-4 shadow-[0px_0px_4px_0px_#00000040] snap-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-[30px] justify-center items-center text-center font-['Urbanist']",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl md:text-4xl font-bold text-[#221628] mb-1",
                                                            children: plot.price
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#575556] text-base font-medium",
                                                            children: [
                                                                "Size : ",
                                                                plot.size
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full bg-primary text-white py-3 px-4 rounded-[4px] font-semibold text-lg font-['Urbanist'] cursor-pointer",
                                                    onClick: ()=>{
                                                        setIsModalOpen(true);
                                                        setClickedIndex(index);
                                                    },
                                                    children: "Get Pricing"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                    lineNumber: 78,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center gap-2 mt-6",
                                            children: plots.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        if (scrollRef.current) {
                                                            const cardWidth = 304 // 280px card + 24px gap
                                                            ;
                                                            scrollRef.current.scrollTo({
                                                                left: cardWidth * index,
                                                                behavior: "smooth"
                                                            });
                                                        }
                                                    },
                                                    className: `h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"}`,
                                                    "aria-label": `Go to plot ${index + 1}`
                                                }, index, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                            lineNumber: 110,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center md:justify-end gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>scroll("left"),
                                                    disabled: !canScrollLeft,
                                                    className: `w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollLeft ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer" : "border-[#BAA2AD] text-gray-300 cursor-not-allowed"}`,
                                                    "aria-label": "Scroll left",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "19",
                                                        height: "19",
                                                        viewBox: "0 0 19 19",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.4762 9.14289L3.80957 9.14289M3.80957 9.14289L6.09528 11.4286M3.80957 9.14289L6.09528 6.85718",
                                                            stroke: "currentColor",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>scroll("right"),
                                                    disabled: !canScrollRight,
                                                    className: `w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${canScrollRight ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer" : "border-[#BAA2AD] text-gray-300 cursor-not-allowed"}`,
                                                    "aria-label": "Scroll right",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "19",
                                                        height: "19",
                                                        viewBox: "0 0 19 19",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3.80953 9.14289L14.4762 9.14289M14.4762 9.14289L12.1905 11.4286M14.4762 9.14289L12.1905 6.85718",
                                                            stroke: "currentColor",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                            lineNumber: 132,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                                    lineNumber: 108,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                            lineNumber: 77,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                    lineNumber: 66,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                lineNumber: 65,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                title: "Get Pricing",
                subtitle: "Enter your details to receive the pricing information for your selected plot.",
                openedEventTitle: clickedIndex !== null ? `Contact_form_opened_pricing_plot_${clickedIndex + 1}` : "Contact_form_opened_pricing_plot",
                submitEventTitle: clickedIndex !== null ? `Contact_form_submit_pricing_plot_${clickedIndex + 1}` : "Contact_form_submit_pricing_plot"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/pricing-plots.tsx",
                lineNumber: 177,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/temp test/src/components/location-map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LocationMap() {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hospital");
    const categories = [
        {
            id: "hospital",
            name: "Hospital",
            icon: (isActive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1.61902 17.8096H17.8095",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M13.7619 1.61914H5.66668C3.23811 1.61914 2.42859 3.06819 2.42859 4.85724V17.8096H17V4.85724C17 3.06819 16.1905 1.61914 13.7619 1.61914Z",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11.3819 12.1428H8.03853C7.62567 12.1428 7.27759 12.4828 7.27759 12.9038V17.8095H12.1347V12.9038C12.1428 12.4828 11.8028 12.1428 11.3819 12.1428Z",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9.71423 4.85718V8.9048",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7.69043 6.8811H11.738",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.5",
                            strokeMiterlimit: "10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
        },
        {
            id: "schools",
            name: "Schools",
            icon: (isActive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "22",
                    height: "22",
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.8125 15.0666L11 17.7736L6.1875 15.0666V12.2065L4.8125 11.4426V15.8707L11 19.3512L17.1875 15.8707V11.4426L15.8125 12.2065V15.0666Z",
                            fill: isActive ? "white" : "#BC9043"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M11 1.97559L1.375 6.96632V8.15801L11 13.5051L19.25 8.92191V12.7188H20.625V6.96632L11 1.97559ZM17.875 8.11286L16.5 8.87671L11 11.9324L5.5 8.87671L4.125 8.11286L3.172 7.58339L11 3.52444L18.828 7.58339L17.875 8.11286Z",
                            fill: isActive ? "white" : "#BC9043"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
        },
        {
            id: "connectivity",
            name: "Connectivity",
            icon: (isActive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4.58333 2.5L2.5 17.5",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.418 2.5L17.4865 17.4813",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 2.5V5",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 14.5833V17.4999",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10 8.33325V11.2499",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 36,
                    columnNumber: 8
                }, this)
        },
        {
            id: "entertainment",
            name: "Entertainment",
            icon: (isActive)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "19",
                    height: "19",
                    viewBox: "0 0 19 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5.01664 10.8501C5.45867 10.8501 5.88259 10.6745 6.19515 10.3619C6.50771 10.0494 6.68331 9.62546 6.68331 9.18343C6.68331 8.7414 6.50771 8.31748 6.19515 8.00492C5.88259 7.69236 5.45867 7.51676 5.01664 7.51676C4.57461 7.51676 4.15069 7.69236 3.83813 8.00492C3.52557 8.31748 3.34998 8.7414 3.34998 9.18343C3.34998 9.62546 3.52557 10.0494 3.83813 10.3619C4.15069 10.6745 4.57461 10.8501 5.01664 10.8501ZM13.35 10.8501C13.792 10.8501 14.2159 10.6745 14.5285 10.3619C14.841 10.0494 15.0166 9.62546 15.0166 9.18343C15.0166 8.7414 14.841 8.31748 14.5285 8.00492C14.2159 7.69236 13.792 7.51676 13.35 7.51676C12.9079 7.51676 12.484 7.69236 12.1715 8.00492C11.8589 8.31748 11.6833 8.7414 11.6833 9.18343C11.6833 9.62546 11.8589 10.0494 12.1715 10.3619C12.484 10.6745 12.9079 10.8501 13.35 10.8501ZM9.18331 6.68343C9.62534 6.68343 10.0493 6.50784 10.3618 6.19528C10.6744 5.88271 10.85 5.45879 10.85 5.01676C10.85 4.57474 10.6744 4.15081 10.3618 3.83825C10.0493 3.52569 9.62534 3.3501 9.18331 3.3501C8.74128 3.3501 8.31736 3.52569 8.0048 3.83825C7.69224 4.15081 7.51664 4.57474 7.51664 5.01676C7.51664 5.45879 7.69224 5.88271 8.0048 6.19528C8.31736 6.50784 8.74128 6.68343 9.18331 6.68343ZM9.18331 15.0168C9.62534 15.0168 10.0493 14.8412 10.3618 14.5286C10.6744 14.216 10.85 13.7921 10.85 13.3501C10.85 12.9081 10.6744 12.4841 10.3618 12.1716C10.0493 11.859 9.62534 11.6834 9.18331 11.6834C8.74128 11.6834 8.31736 11.859 8.0048 12.1716C7.69224 12.4841 7.51664 12.9081 7.51664 13.3501C7.51664 13.7921 7.69224 14.216 8.0048 14.5286C8.31736 14.8412 8.74128 15.0168 9.18331 15.0168Z",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.7",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0.849976 9.18343C0.849976 13.7859 4.58081 17.5168 9.18331 17.5168C13.7858 17.5168 17.5166 13.7859 17.5166 9.18343C17.5166 4.58093 13.7858 0.850098 9.18331 0.850098C4.58081 0.850098 0.849976 4.58093 0.849976 9.18343ZM0.849976 9.18343V17.5168",
                            stroke: isActive ? "white" : "#BC9043",
                            strokeWidth: "1.7",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
        }
    ];
    const locationData = {
        hospital: [
            {
                name: "Manipal Hospital",
                distance: "3 km"
            },
            {
                name: "Vydehi Super Speciality Hospital",
                distance: "3 km"
            },
            {
                name: "Brookfield Multi Speciality Hospital",
                distance: "5 km"
            },
            {
                name: "Kauvery Hospital",
                distance: "5 km"
            }
        ],
        schools: [
            {
                name: "Glentree Academy",
                distance: "3 km"
            },
            {
                name: "Vibgyor School",
                distance: "3 km"
            },
            {
                name: "Cambridge International School",
                distance: "5 km"
            },
            {
                name: "Ryan International",
                distance: "7 km"
            }
        ],
        connectivity: [
            {
                name: "Brigade IRV Center",
                distance: "3 km"
            },
            {
                name: "Embassy Tech Village",
                distance: "7 km"
            },
            {
                name: "Prestige Tech Park",
                distance: "5 km"
            },
            {
                name: "ORR",
                distance: "20 km"
            },
            {
                name: "Sarjapur Road",
                distance: "12 km"
            }
        ],
        entertainment: [
            {
                name: "Nexus Mall, Whitefield",
                distance: "3 km"
            },
            {
                name: "Brookfield Mall",
                distance: "3 km"
            },
            {
                name: "Ascendas Park Square Mall",
                distance: "5 km"
            },
            {
                name: "Inorbit Mall",
                distance: "5 km"
            }
        ]
    };
    // Get the current category icon
    const getCurrentIcon = ()=>{
        const category = categories.find((cat)=>cat.id === activeCategory);
        return category?.icon(false) || null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "location",
        className: "py-12 md:py-20 bg-[#F7F1F7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full md:max-w-7xl px-4 md:px-0 md:mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']",
                            children: "Location & Connectivity"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl",
                            children: "Strategically located for seamless connectivity to all major landmarks"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-lg overflow-hidden shadow-lg w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[280px] sm:h-[350px] md:h-[500px] bg-neutral-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        title: "Location Map",
                                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.867477854614!2d77.633273!3d13.107580700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19cf246ea6b7%3A0x9d206694b5e047e0!2sGodrej%20Thanisandra!5e0!3m2!1sen!2sin!4v1763106191641!5m2!1sen!2sin",
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            border: 0
                                        },
                                        allowFullScreen: true,
                                        loading: "lazy",
                                        referrerPolicy: "no-referrer-when-downgrade"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute top-4 md:top-4 right-4 md:right-4 bg-primary text-white px-5 md:px-8 py-2 md:py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-[14px] transition-colors duration-300 shadow-lg cursor-pointer",
                                        onClick: ()=>{
                                            window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.867477854614!2d77.633273!3d13.107580700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19cf246ea6b7%3A0x9d206694b5e047e0!2sGodrej%20Thanisandra!5e0!3m2!1sen!2sin!4v1763106191641!5m2!1sen!2sin", "_blank");
                                        },
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-full overflow-x-auto h-full scrollbar-hide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex overflow-x-auto gap-2 md:gap-3 mb-6 md:mb-8 pb-2 scrollbar-hide snap-x snap-mandatory h-auto",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(category.id),
                                            className: `flex items-center gap-1.5 md:gap-2.5 px-2.5 md:px-3 py-2 md:py-2.5 rounded-md font-semibold font-['Urbanist'] text-xs md:text-base transition-all duration-300 whitespace-nowrap shrink-0 snap-start ${activeCategory === category.id ? "bg-primary text-white shadow-md" : "bg-white text-[#221628] border border-[#E8E7E8] hover:border-primary hover:text-primary"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-4 h-4 md:w-6 md:h-6 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "scale-75 md:scale-100",
                                                        children: category.icon(activeCategory === category.id)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, category.id, true, {
                                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 md:space-y-3 bg-white rounded-lg p-2 md:p-4 border border-gray-200 shadow-sm h-[406px] overflow-y-auto scrollbar-hide",
                                    children: locationData[activeCategory]?.map((location, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center justify-between py-2 md:pb-3 ${index !== locationData[activeCategory].length - 1 ? "border-b border-[#E8E7E8]" : "border-b border-[#E8E7E8]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 md:gap-4 flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 md:w-10 md:h-10 bg-[#E8E7E8] rounded-full flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "scale-75 md:scale-100",
                                                                children: getCurrentIcon()
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-[#221628] font-['Urbanist'] text-sm md:text-base truncate",
                                                            children: location.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#575556] font-medium font-['Urbanist'] text-xs md:text-sm bg-[#E8E7E8] px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap ml-2 shrink-0",
                                                    children: location.distance
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/location-map.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Gallery() {
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const images = [
        {
            src: "/assets/gallery/interior1.png",
            desktopCols: 1,
            mobileRows: 1
        },
        {
            src: "/assets/gallery/image4.png",
            desktopCols: 3,
            mobileRows: 1
        },
        {
            src: "/assets/gallery/gallery1.png",
            desktopCols: 2,
            mobileRows: 2
        },
        {
            src: "/assets/gallery/image8.png",
            desktopCols: 3,
            mobileRows: 2
        },
        {
            src: "/wimming-pool-recreation-area.jpg",
            desktopCols: 2,
            mobileRows: 3
        },
        {
            src: "/residential-buildings-complex.jpg",
            desktopCols: 1,
            mobileRows: 3
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "gallery",
            className: "py-12 md:py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 md:mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']",
                                children: "Envision Your New Life"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl",
                                children: "Take a visual tour of the apartments, expansive clubhouse, and beautifully landscaped open spaces."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex md:flex-wrap gap-4 lg:gap-6",
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-md group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 h-[280px] lg:h-60",
                                style: {
                                    flex: image.desktopCols === 3 ? '1 1 calc(40.666% - 16px)' : image.desktopCols === 2 ? '1 1 calc(30.333% - 16px)' : '1 1 calc(20% - 16px)',
                                    minWidth: image.desktopCols === 3 ? '1 1 calc(40.666% - 16px)' : image.desktopCols === 2 ? '1 1 calc(30.333% - 16px)' : '1 1 calc(20% - 16px)'
                                },
                                onClick: ()=>setSelectedImage(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image.src || "/placeholder.svg",
                                        alt: `Gallery ${index + 1}`,
                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap md:hidden gap-2",
                        children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-lg group cursor-pointer shadow-md w-[48%] h-auto",
                                style: {
                                    gridColumn: image.mobileRows === 3 ? 'span 2' : image.mobileRows === 2 ? 'span 2' : 'span 1',
                                    height: image.mobileRows === 3 ? '280px' : image.mobileRows === 2 ? '200px' : '140px'
                                },
                                onClick: ()=>setSelectedImage(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image.src || "/placeholder.svg",
                                        alt: `Gallery ${index + 1}`,
                                        className: "w-full h-full object-cover active:scale-105 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/0 active:bg-black/20 transition-colors duration-200"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/temp test/src/components/gallery.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/temp test/src/components/amenities.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Amenities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Amenities() {
    const Desktopamenities = [
        {
            name: "Lush Greenery",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "51",
                height: "51",
                viewBox: "0 0 51 51",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M33.4427 44.1224V38.7891H49.4498L40.1123 26.7891H48.1159L33.4427 6.78906L28.1069 12.1224",
                        stroke: "#BC9043",
                        "stroke-width": "2.9",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 6,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.1379 38.7835H38.8259L26.8122 21.4502H34.8213L20.1379 1.4502L5.45457 21.4502H13.4637L1.45001 38.7835H20.1379ZM20.1379 38.7835V49.4502",
                        stroke: "#BC9043",
                        "stroke-width": "2.9",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 7,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 5,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "CCTV Surveillance",
            icon: '/cctv.svg',
            colored: true
        },
        {
            name: "Solar Street Lights",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.6554 2.49366C5.28493 2.49366 4.97535 2.37701 4.72663 2.14372C4.47792 1.91042 4.35269 1.61921 4.35095 1.27008C4.35095 0.922581 4.47618 0.631368 4.72663 0.39644C4.97535 0.163144 5.28493 0.0464962 5.6554 0.0464962H10.1218C10.4923 0.0464962 10.8027 0.163144 11.0532 0.39644C11.3019 0.631368 11.4262 0.922581 11.4262 1.27008C11.4262 1.61758 11.3019 1.90879 11.0532 2.14372C10.8045 2.37864 10.494 2.49529 10.1218 2.49366H5.6554ZM7.62249 35.5304L6.73026 39.764C6.62938 40.2371 6.73808 40.6531 7.05637 41.012C7.37465 41.3742 7.78424 41.5553 8.28515 41.5553H24.7211V35.5304H7.62249ZM9.4748 12.7228L12.655 9.74216C12.8985 9.51376 13.1951 9.39956 13.5447 9.39956C13.8942 9.39956 14.196 9.51376 14.4499 9.74216C14.7387 9.98035 14.8743 10.2707 14.8569 10.6133C14.8395 10.956 14.7039 11.2472 14.4499 11.487L11.2697 14.4725C11.0262 14.7009 10.7297 14.8151 10.3801 14.8151C10.0305 14.8151 9.72873 14.7009 9.4748 14.4725C9.18608 14.2327 9.05042 13.9415 9.06782 13.5989C9.08521 13.2547 9.22087 12.961 9.4748 12.7228ZM8.16514 33.0832H24.7211V26.9164H10.7636C10.3949 26.9164 10.0601 27.0346 9.75917 27.2712C9.45828 27.5077 9.27479 27.7981 9.20869 28.1424L8.16514 33.0832ZM26.0256 9.88409C23.0862 9.88409 20.5956 8.92562 18.5537 7.00868C16.5118 5.09336 15.4909 2.75714 15.4909 0H18.0998C18.0998 2.0703 18.8685 3.82736 20.406 5.27119C21.9453 6.71339 23.8184 7.43448 26.0256 7.43448C28.2327 7.43448 30.1059 6.71339 31.6451 5.27119C33.1826 3.82736 33.9513 2.0703 33.9513 0H36.5602C36.5602 2.75714 35.5393 5.09336 33.4974 7.00868C31.4555 8.92399 28.9649 9.88246 26.0256 9.88409ZM24.7211 18.8701V14.683C24.7211 14.3339 24.8455 14.0426 25.0942 13.8093C25.3446 13.576 25.6551 13.4594 26.0256 13.4594C26.396 13.4594 26.7065 13.576 26.9569 13.8093C27.2056 14.0426 27.33 14.3339 27.33 14.683V18.8701C27.33 19.2192 27.2056 19.5104 26.9569 19.7437C26.7065 19.977 26.396 20.0937 26.0256 20.0937C25.6551 20.0937 25.3446 19.977 25.0942 19.7437C24.8455 19.5104 24.7211 19.2192 24.7211 18.8701ZM27.33 41.5553H43.7138C44.2182 41.5553 44.6286 41.3742 44.9452 41.012C45.2635 40.6531 45.3722 40.2371 45.2713 39.764L44.3791 35.5304H27.33V41.5553ZM27.33 33.0832H43.8364L42.7929 28.1399C42.725 27.7973 42.5407 27.5077 42.2398 27.2712C41.9389 27.0346 41.6049 26.9172 41.238 26.9188H27.33V33.0832ZM40.831 14.4554L37.6012 11.4258C37.3577 11.1974 37.2411 10.9192 37.2516 10.5913C37.2638 10.2634 37.3968 9.98035 37.6507 9.74216C37.8942 9.51376 38.1847 9.39956 38.5221 9.39956C38.8613 9.39956 39.1526 9.51376 39.3961 9.74216L42.6911 12.7253C42.9798 12.9537 43.1242 13.2318 43.1242 13.5597C43.1242 13.8877 42.9798 14.1862 42.6911 14.4554C42.4041 14.7262 42.0945 14.8616 41.7623 14.8616C41.4301 14.8616 41.1197 14.7262 40.831 14.4554ZM46.3957 2.49366H40.6249V0.0464962H46.3957C46.7662 0.0464962 47.0758 0.163144 47.3245 0.39644C47.5749 0.631368 47.7002 0.922581 47.7002 1.27008C47.7002 1.61758 47.5749 1.90879 47.3245 2.14372C47.074 2.37864 46.7644 2.49529 46.3957 2.49366ZM4.08485 39.2574L6.56329 27.6334C6.78069 26.7116 7.2703 25.9538 8.03209 25.36C8.79214 24.7677 9.68612 24.4716 10.714 24.4716H41.2875C42.3137 24.4716 43.2077 24.7677 43.9695 25.36C44.7313 25.9522 45.22 26.7108 45.4357 27.6358L47.9141 39.2598C48.1628 40.4948 47.8715 41.5936 47.0401 42.5562C46.2088 43.5187 45.1174 44 43.766 44H8.23297C6.88331 44 5.7928 43.5187 4.96143 42.5562C4.13007 41.5936 3.83787 40.494 4.08485 39.2574Z",
                    fill: "#BC9043"
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 20,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 19,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "24 x 7 Security",
            icon: '/24x7.svg',
            colored: true
        },
        {
            name: "Open Spaces",
            icon: '/open-spaces.svg',
            colored: true
        },
        {
            name: "Swimming Pools",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        "clip-path": "url(#clip0_1_859)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1.49902 45.6275C3.63246 46.4872 5.96777 46.7168 8.22777 46.2889C10.4878 45.861 12.5775 44.7936 14.249 43.2135C16.4777 45.3234 19.43 46.4993 22.499 46.4993C25.568 46.4993 28.5204 45.3234 30.749 43.2135C32.8532 45.2053 35.607 46.3685 38.502 46.4883C41.3969 46.6082 44.2374 45.6766 46.499 43.8655M34.499 37.4995V7.49951C34.499 5.90821 35.1312 4.38209 36.2564 3.25687C37.3816 2.13165 38.9077 1.49951 40.499 1.49951C42.0903 1.49951 43.6165 2.13165 44.7417 3.25687C45.8669 4.38209 46.499 5.90821 46.499 7.49951M16.499 37.4995V7.49951C16.499 5.90821 17.1312 4.38209 18.2564 3.25687C19.3816 2.13165 20.9077 1.49951 22.499 1.49951C24.0903 1.49951 25.6164 2.13165 26.7417 3.25687C27.8669 4.38209 28.499 5.90821 28.499 7.49951M16.499 22.4995H34.499M16.499 31.4995H34.499M16.499 13.4995H34.499",
                            stroke: "#BC9043",
                            "stroke-width": "2.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 39,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 38,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "clip0_1_859",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "48",
                                height: "48",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                lineNumber: 43,
                                columnNumber: 1
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 42,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 41,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 37,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "Luxury Clubhouse",
            icon: '/clubhouse.svg',
            colored: true
        },
        {
            name: "Outdoor Courts",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.3277 5.15625L8.21332 18.6562H9.94957L12.6777 6.84375H14.3839L12.4527 18.6562H14.1683L15.1152 12.8437H23.1589V18.6562H24.8464V12.8437H32.8902L33.8371 18.6562H35.5527L33.6214 6.84375H35.3277L38.0558 18.6562H39.7902L36.6777 5.15625H11.3277ZM16.0996 6.84375H31.9058L32.6183 11.1562H15.3871L16.0996 6.84375ZM6.84645 20.3437V23.1562H41.1589V20.3437H6.84645ZM6.78645 24.8437L1.94238 45.8437H46.0621L41.2152 24.8437H39.4808L43.9433 44.1562H39.7246L36.5652 24.8437H34.8496L36.1808 33H24.8464V24.8437H23.1589V33H11.8246L13.1558 24.8437H11.4402L8.28551 44.1562H4.06301L8.52176 24.8437H6.78645ZM11.5433 34.6875H36.4621L38.0089 44.1562H9.99644L11.5433 34.6875Z",
                    fill: "#BC9043"
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 58,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 57,
                columnNumber: 14
            }, this),
            colored: false
        }
    ];
    const Mobileamenities = [
        {
            name: "Lush Greenery",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "51",
                height: "51",
                viewBox: "0 0 51 51",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M33.4427 44.1224V38.7891H49.4498L40.1123 26.7891H48.1159L33.4427 6.78906L28.1069 12.1224",
                        stroke: "#BC9043",
                        "stroke-width": "2.9",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 68,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.1379 38.7835H38.8259L26.8122 21.4502H34.8213L20.1379 1.4502L5.45457 21.4502H13.4637L1.45001 38.7835H20.1379ZM20.1379 38.7835V49.4502",
                        stroke: "#BC9043",
                        "stroke-width": "2.9",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 69,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 67,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "CCTV Surveillance",
            icon: '/cctv.svg',
            colored: true
        },
        {
            name: "24 x 7 Security",
            icon: '/24x7.svg',
            colored: true
        },
        {
            name: "Solar Street Lights",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.6554 2.49366C5.28493 2.49366 4.97535 2.37701 4.72663 2.14372C4.47792 1.91042 4.35269 1.61921 4.35095 1.27008C4.35095 0.922581 4.47618 0.631368 4.72663 0.39644C4.97535 0.163144 5.28493 0.0464962 5.6554 0.0464962H10.1218C10.4923 0.0464962 10.8027 0.163144 11.0532 0.39644C11.3019 0.631368 11.4262 0.922581 11.4262 1.27008C11.4262 1.61758 11.3019 1.90879 11.0532 2.14372C10.8045 2.37864 10.494 2.49529 10.1218 2.49366H5.6554ZM7.62249 35.5304L6.73026 39.764C6.62938 40.2371 6.73808 40.6531 7.05637 41.012C7.37465 41.3742 7.78424 41.5553 8.28515 41.5553H24.7211V35.5304H7.62249ZM9.4748 12.7228L12.655 9.74216C12.8985 9.51376 13.1951 9.39956 13.5447 9.39956C13.8942 9.39956 14.196 9.51376 14.4499 9.74216C14.7387 9.98035 14.8743 10.2707 14.8569 10.6133C14.8395 10.956 14.7039 11.2472 14.4499 11.487L11.2697 14.4725C11.0262 14.7009 10.7297 14.8151 10.3801 14.8151C10.0305 14.8151 9.72873 14.7009 9.4748 14.4725C9.18608 14.2327 9.05042 13.9415 9.06782 13.5989C9.08521 13.2547 9.22087 12.961 9.4748 12.7228ZM8.16514 33.0832H24.7211V26.9164H10.7636C10.3949 26.9164 10.0601 27.0346 9.75917 27.2712C9.45828 27.5077 9.27479 27.7981 9.20869 28.1424L8.16514 33.0832ZM26.0256 9.88409C23.0862 9.88409 20.5956 8.92562 18.5537 7.00868C16.5118 5.09336 15.4909 2.75714 15.4909 0H18.0998C18.0998 2.0703 18.8685 3.82736 20.406 5.27119C21.9453 6.71339 23.8184 7.43448 26.0256 7.43448C28.2327 7.43448 30.1059 6.71339 31.6451 5.27119C33.1826 3.82736 33.9513 2.0703 33.9513 0H36.5602C36.5602 2.75714 35.5393 5.09336 33.4974 7.00868C31.4555 8.92399 28.9649 9.88246 26.0256 9.88409ZM24.7211 18.8701V14.683C24.7211 14.3339 24.8455 14.0426 25.0942 13.8093C25.3446 13.576 25.6551 13.4594 26.0256 13.4594C26.396 13.4594 26.7065 13.576 26.9569 13.8093C27.2056 14.0426 27.33 14.3339 27.33 14.683V18.8701C27.33 19.2192 27.2056 19.5104 26.9569 19.7437C26.7065 19.977 26.396 20.0937 26.0256 20.0937C25.6551 20.0937 25.3446 19.977 25.0942 19.7437C24.8455 19.5104 24.7211 19.2192 24.7211 18.8701ZM27.33 41.5553H43.7138C44.2182 41.5553 44.6286 41.3742 44.9452 41.012C45.2635 40.6531 45.3722 40.2371 45.2713 39.764L44.3791 35.5304H27.33V41.5553ZM27.33 33.0832H43.8364L42.7929 28.1399C42.725 27.7973 42.5407 27.5077 42.2398 27.2712C41.9389 27.0346 41.6049 26.9172 41.238 26.9188H27.33V33.0832ZM40.831 14.4554L37.6012 11.4258C37.3577 11.1974 37.2411 10.9192 37.2516 10.5913C37.2638 10.2634 37.3968 9.98035 37.6507 9.74216C37.8942 9.51376 38.1847 9.39956 38.5221 9.39956C38.8613 9.39956 39.1526 9.51376 39.3961 9.74216L42.6911 12.7253C42.9798 12.9537 43.1242 13.2318 43.1242 13.5597C43.1242 13.8877 42.9798 14.1862 42.6911 14.4554C42.4041 14.7262 42.0945 14.8616 41.7623 14.8616C41.4301 14.8616 41.1197 14.7262 40.831 14.4554ZM46.3957 2.49366H40.6249V0.0464962H46.3957C46.7662 0.0464962 47.0758 0.163144 47.3245 0.39644C47.5749 0.631368 47.7002 0.922581 47.7002 1.27008C47.7002 1.61758 47.5749 1.90879 47.3245 2.14372C47.074 2.37864 46.7644 2.49529 46.3957 2.49366ZM4.08485 39.2574L6.56329 27.6334C6.78069 26.7116 7.2703 25.9538 8.03209 25.36C8.79214 24.7677 9.68612 24.4716 10.714 24.4716H41.2875C42.3137 24.4716 43.2077 24.7677 43.9695 25.36C44.7313 25.9522 45.22 26.7108 45.4357 27.6358L47.9141 39.2598C48.1628 40.4948 47.8715 41.5936 47.0401 42.5562C46.2088 43.5187 45.1174 44 43.766 44H8.23297C6.88331 44 5.7928 43.5187 4.96143 42.5562C4.13007 41.5936 3.83787 40.494 4.08485 39.2574Z",
                    fill: "#BC9043"
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 87,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 86,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "Swimming Pools",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        "clip-path": "url(#clip0_1_859)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M1.49902 45.6275C3.63246 46.4872 5.96777 46.7168 8.22777 46.2889C10.4878 45.861 12.5775 44.7936 14.249 43.2135C16.4777 45.3234 19.43 46.4993 22.499 46.4993C25.568 46.4993 28.5204 45.3234 30.749 43.2135C32.8532 45.2053 35.607 46.3685 38.502 46.4883C41.3969 46.6082 44.2374 45.6766 46.499 43.8655M34.499 37.4995V7.49951C34.499 5.90821 35.1312 4.38209 36.2564 3.25687C37.3816 2.13165 38.9077 1.49951 40.499 1.49951C42.0903 1.49951 43.6165 2.13165 44.7417 3.25687C45.8669 4.38209 46.499 5.90821 46.499 7.49951M16.499 37.4995V7.49951C16.499 5.90821 17.1312 4.38209 18.2564 3.25687C19.3816 2.13165 20.9077 1.49951 22.499 1.49951C24.0903 1.49951 25.6164 2.13165 26.7417 3.25687C27.8669 4.38209 28.499 5.90821 28.499 7.49951M16.499 22.4995H34.499M16.499 31.4995H34.499M16.499 13.4995H34.499",
                            stroke: "#9F0E52",
                            "stroke-width": "2.5",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 96,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 95,
                        columnNumber: 1
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "clip0_1_859",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "48",
                                height: "48",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                lineNumber: 100,
                                columnNumber: 1
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 99,
                            columnNumber: 1
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                        lineNumber: 98,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 94,
                columnNumber: 14
            }, this),
            colored: false
        },
        {
            name: "Open Spaces",
            icon: '/open-spaces.svg',
            colored: true
        },
        {
            name: "Luxury Clubhouse",
            icon: '/clubhouse.svg',
            colored: true
        },
        {
            name: "Outdoor Courts",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "48",
                height: "48",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.3277 5.15625L8.21332 18.6562H9.94957L12.6777 6.84375H14.3839L12.4527 18.6562H14.1683L15.1152 12.8437H23.1589V18.6562H24.8464V12.8437H32.8902L33.8371 18.6562H35.5527L33.6214 6.84375H35.3277L38.0558 18.6562H39.7902L36.6777 5.15625H11.3277ZM16.0996 6.84375H31.9058L32.6183 11.1562H15.3871L16.0996 6.84375ZM6.84645 20.3437V23.1562H41.1589V20.3437H6.84645ZM6.78645 24.8437L1.94238 45.8437H46.0621L41.2152 24.8437H39.4808L43.9433 44.1562H39.7246L36.5652 24.8437H34.8496L36.1808 33H24.8464V24.8437H23.1589V33H11.8246L13.1558 24.8437H11.4402L8.28551 44.1562H4.06301L8.52176 24.8437H6.78645ZM11.5433 34.6875H36.4621L38.0089 44.1562H9.99644L11.5433 34.6875Z",
                    fill: "#BC9043"
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 120,
                    columnNumber: 1
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                lineNumber: 119,
                columnNumber: 14
            }, this),
            colored: false
        }
    ];
    const amenities = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth >= 768 ? "TURBOPACK unreachable" : Mobileamenities;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "amenities",
        className: "py-12 md:py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']",
                            children: "Amenities & Facilities"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl",
                            children: "It offers its residents access to an exclusive array of recreational and sporting facilities that could rival any resort."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6",
                    children: amenities.map((amenity, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `relative rounded-[4px]   border transition-all duration-300 hover:shadow-xl group cursor-pointer
                ${amenity.colored ? "bg-primary text-white border-primary" : "bg-white text-[#221628] border-primary hover:border-[#9a1751]"}
              `,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row justify-between items-center h-full p-4 md:px-5 md:py-4 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex md:hidden justify-end items-end w-full",
                                        children: typeof amenity.icon === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: amenity.icon,
                                            alt: amenity.name,
                                            className: `w-10 h-10 md:w-12 md:h-12 stroke-primary object-contain ${amenity.colored ? 'filter brightness-0 invert' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                            lineNumber: 154,
                                            columnNumber: 55
                                        }, this) : amenity.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `text-xl md:text-[28px] lg:text-[28pxl items-start font-bold font-['Urbanist']  w-[80%] md:w-full leading-tight ${amenity.colored ? "text-white" : "text-[#221628]"}`,
                                            children: amenity.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex justify-end items-end w-full md:w-auto",
                                        children: typeof amenity.icon === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: amenity.icon,
                                            alt: amenity.name,
                                            className: `w-10 h-10 md:w-12 md:h-12 stroke-primary object-contain ${amenity.colored ? 'filter brightness-0 invert' : ''}`
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                            lineNumber: 173,
                                            columnNumber: 54
                                        }, this) : amenity.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/amenities.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/faqs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FAQs() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const faqs = [
        {
            question: "What is the possession date of the project?",
            answer: "The possession of the project is expected by Dec 2029."
        },
        {
            question: "What is the location of the project?",
            answer: "The township is strategically connected to Whitefield, Brookfield, Outer Ring Road, Sarjapur Road, and more, with easy access to Hope Farm Junction Metro, Manipal Hospital, and NEXUS Mall."
        },
        {
            question: "When does the pre booking start for the project?",
            answer: "Pre-bookings for the project are scheduled to begin from the month of November,2025. Interested buyers can register their interest in advance to secure priority access"
        },
        {
            question: "What amenities and features will be available in the project?",
            answer: "The project will offer modern amenities such as a clubhouse, swimming pool, landscaped gardens, children’s play area, gymnasium, and 24/7 security, ensuring a comfortable and luxurious lifestyle for residents."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faqs",
        className: "py-12 md:py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 md:px-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:pr-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-4 md:mb-6 text-[#221628] font-['Urbanist'] leading-tight",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#575556] text-[14px] md:text-base font-medium font-['Urbanist']",
                                children: "Find quick answers to common question about the project."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white border border-[#E8E7E8] rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_#00000040]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                        className: "w-full p-3 md:p-4 flex justify-between items-center gap-4 text-left transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-[#0A0B0A] font-['Urbanist'] text-base md:text-xl pr-2",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 w-6 h-6 flex items-center justify-center",
                                                children: openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "text-[#221628]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M18 12H6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "text-[#221628]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 6V18M18 12H6",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 md:px-6 pb-4 md:pb-5 pt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#575556] text-sm md:text-lg leading-normal font-medium font-['Urbanist']",
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                                lineNumber: 103,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/temp test/src/components/faqs.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/temp test/src/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function Footer() {
    const handleCallClick = ()=>{
        const phoneNumber = "+919353329893";
        // use location.href to invoke the dialer (works on mobile)
        window.location.href = `tel:${phoneNumber}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-[#222A28] text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[#4E5553]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl lg:text-[44px] font-bold text-white text-center mb-6 md:mb-8 font-['Urbanist']",
                                    children: "Disclaimer"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-5xl mx-auto space-y-4 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']",
                                            children: "* The images, designs, and layouts displayed on this website are for representational purposes only and may not reflect the actual project. The developer reserves the right to make modifications, additions, or deletions to the project plan, specifications, and pricing without prior notice."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                            lineNumber: 20,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']",
                                            children: "* All prices mentioned are indicative and subject to change. The final price will be determined based on the unit selected, floor level, and other factors. Please contact our sales team for the most current pricing and availability information."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']",
                                            children: "* All amenities and facilities are subject to the terms and conditions laid down by the developer and may be modified based on government regulations, approvals, and project requirements."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#222A28]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-7xl mx-auto px-4 md:px-0 py-6 md:py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#A0A0A0] text-sm font-['Urbanist'] font-medium",
                                        children: "Copyright © Authorised Marketing Partner"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline text-[#A0A0A0]",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://snn-duomont.in/Terms&Condition.html",
                                        className: "text-[#A0A0A0] hover:text-white transition-colors text-sm font-['Urbanist'] font-medium",
                                        children: "Terms and Condition"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden md:inline text-[#A0A0A0]",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://snn-duomont.in/Privacy-policy.html",
                                        className: "text-[#A0A0A0] hover:text-white transition-colors text-sm font-['Urbanist'] font-medium",
                                        children: "Privacy policy"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden w-full flex flex-wrap gap-1 bg-white rounded-t-md pt-6 pr-5 pl-3 pb-5 items-center justify-between bottom-0 sticky z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-primary text-md text-white px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center gap-2 shadow-md cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto justify-center",
                        onClick: handleCallClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 12 12",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6.84401 2.56121C7.31161 2.65226 7.74136 2.88052 8.07824 3.21675C8.41512 3.55299 8.64381 3.98191 8.73504 4.44862M6.84401 0.649902C7.81551 0.757622 8.72144 1.19184 9.41305 1.88126C10.1047 2.57069 10.5409 3.47434 10.65 4.44384M10.1713 8.25689V9.69037C10.1718 9.82345 10.1445 9.95517 10.0911 10.0771C10.0377 10.199 9.95932 10.3085 9.86107 10.3984C9.76283 10.4884 9.64684 10.5569 9.52053 10.5995C9.39423 10.6422 9.2604 10.658 9.12761 10.646C7.65444 10.4863 6.23936 9.98383 4.99607 9.1791C3.83935 8.44547 2.85865 7.46665 2.12362 6.31214C1.31454 5.06559 0.811031 3.64635 0.653887 2.16939C0.641924 2.03725 0.657657 1.90408 0.700086 1.77835C0.742515 1.65261 0.810709 1.53708 0.900327 1.43909C0.989945 1.3411 1.09902 1.26281 1.22062 1.20921C1.34221 1.1556 1.47366 1.12785 1.60658 1.12773H3.04281C3.27514 1.12545 3.50038 1.20756 3.67654 1.35877C3.85271 1.50998 3.96777 1.71997 4.00029 1.94959C4.06091 2.40833 4.17333 2.85876 4.33541 3.29228C4.39982 3.46331 4.41376 3.64918 4.37558 3.82787C4.33739 4.00656 4.24869 4.17058 4.11997 4.30049L3.51197 4.90733C4.19349 6.10359 5.18587 7.09408 6.38442 7.77429L6.99242 7.16745C7.12258 7.03898 7.28692 6.95044 7.46595 6.91234C7.64498 6.87423 7.83121 6.88814 8.00256 6.95243C8.43691 7.1142 8.8882 7.2264 9.34783 7.28691C9.58038 7.31965 9.79277 7.43656 9.94459 7.61541C10.0964 7.79425 10.1771 8.02256 10.1713 8.25689Z",
                                    stroke: "white",
                                    strokeWidth: "1.3",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                    lineNumber: 82,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                lineNumber: 75,
                                columnNumber: 5
                            }, this),
                            "Contact Us"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                        lineNumber: 71,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "border text-md border-primary text-primary px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center gap-2 cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto justify-center",
                        onClick: ()=>{
                            window.open("https://wa.me/+919353329893", "_blank");
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/whatsapp.svg",
                                alt: "whatsapp Icon",
                                className: "w-4.5 h-4.5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                                lineNumber: 98,
                                columnNumber: 5
                            }, this),
                            "Whatsapp"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                        lineNumber: 92,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/temp test/src/components/footer.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/temp test/src/components/master-plan.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MasterPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/EnquiryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function MasterPlan() {
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "master-plan",
                className: "py-12 md:py-20 bg-[#F7F1F7]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " mx-auto pl-4 md:pl-0 max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-start  pr-4 md:pr-0 md:justify-between mb-8 md:mb-12 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']",
                                            children: "Master Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-2xl",
                                            children: "Explore the thoughtful layout, strategic tower placement, and vast open spaces designed for a refined living experience."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                            lineNumber: 18,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-primary  hidden md:flex text-white px-6 md:px-8 py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-base transition-colors duration-300 shadow-md items-center gap-2 whitespace-nowrap cursor-pointer",
                                    onClick: ()=>setIsModalOpen(true),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/download.svg",
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        "Download Brochure"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[151px] md:h-[534px] bg-[#1E341E] rounded-[4px] overflow-hidden shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex overflow-x-scroll px-2 md:px-6 py-4 md:py-6 gap-3 md:gap-6 snap-x snap-mandatory",
                                    style: {
                                        scrollbarWidth: "none",
                                        msOverflowStyle: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/masterplan/Group 1000008236.png",
                                            alt: "Master Plan Brochure - Page 1",
                                            className: "snap-none flex-shrink-0 object-contain rounded-[4px] h-[130px] md:h-[480px] w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/brochure2.png",
                                            alt: "Master Plan Brochure - Page 2",
                                            className: "snap-none flex-shrink-0 object-contain rounded-[4px] h-[130px] md:h-[480px] w-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-primary  md:hidden text-white mt-4.5 px-6 md:px-8 py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-base transition-colors duration-300 shadow-md flex flex-row items-center gap-2 whitespace-nowrap cursor-pointer",
                            onClick: ()=>setIsModalOpen(true),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/download.svg",
                                    className: "w-4.5 h-4.5 object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                "Download Brochure"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$EnquiryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                title: "Download Brochure",
                subtitle: "Enter your name and number to get the brochure download instantly",
                openedEventTitle: "Contact_form_opened_masterplan",
                submitEventTitle: "Contact_form_submit_masterplan"
            }, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/components/master-plan.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/temp test/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/node_modules/react-ga4/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/navigation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/hero.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$quick$2d$stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/quick-stats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$introduction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/introduction.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$why$2d$choose$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/why-choose.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$pricing$2d$plots$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/pricing-plots.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$location$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/location-map.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/gallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$amenities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/amenities.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$faqs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/faqs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$master$2d$plan$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/temp test/src/components/master-plan.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3J8R39GCCX";
        if (!GA_ID) return;
        // initialize once
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].initialize(GA_ID);
        // send page_view on route change / mount
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$react$2d$ga4$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].send({
            hitType: "pageview",
            page: pathname,
            title: document.title
        });
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$navigation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$hero$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$quick$2d$stats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$introduction$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$why$2d$choose$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$pricing$2d$plots$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$location$2d$map$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$amenities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$master$2d$plan$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$faqs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$temp__test$2f$src$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/temp test/src/app/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/temp test/src/app/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b00f04e0._.js.map