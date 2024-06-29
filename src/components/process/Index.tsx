"use client";
import { useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import AOS from "aos";
import { UIStore } from "@/services/pullstate/store";
import { useRouter } from "next/navigation";

const Process = () => {
  const selectLangauge = UIStore.useState((s) => s.selectLanguage);
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <>
      <section
        id="ourProcess"
        className="bg-white pt-[1300px] sm:mt-[500px] sm:py-48 md:mt-[350px]  md:py-20 lg:mt-0 lg:py-24"
      >
        <div className="">
          <SectionTitle
            title="Our Process"
            ctitle="我们的流程"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="  flex flex-wrap ">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
              {/* <div className=" flex w-auto flex-wrap">
                <div className="mx-5  h-auto md:w-1/2 lg:w-1/2">
                  <img
                    className="mt-12 h-full  w-full  object-cover object-center md:mt-0 "
                    src="assets/our_process.jpg"
                    alt="step"
                  />
                </div>
                <div className="px-5 sm:w-full md:w-1/2 md:px-0 md:py-6 md:pl-10 lg:w-2/5">
                  <div className="relative flex pb-5">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      1
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Conceptual Design/ Concept Development and Prototyping:"
                          : "概念设计/概念开发和原型制作"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? " Develop initial product design concepts, including considerations in geometry, angles, gating, cooling, and ejection, and share sketches or CAD models for your feedback."
                          : "开发初始产品设计概念，包括几何形状、角度、浇口、冷却和顶出方面的考虑因素，并分享草图或 CAD 模型以获取反馈。"}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      2
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Detailed Design and Validation/Concept Testing:"
                          : "详细设计和验证/概念测试:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? " Incorporate the feedback to develop a detailed 3D CAD model, conduct mold flow analysis to optimise filling, cooling, and minimise warpage, and share simulation results for validation and manufacturability assurance.."
                          : "结合反馈来开发详细的 3D CAD 模型，进行模流分析以优化填充、冷却并最大程度地减少翘曲，并共享仿真结果以进行验证和可制造性保证"}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-4">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      3
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Prototype and Testing/ Engineering and Development Testing:"
                          : "原型和测试/工程和开发测试:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? " Prepare prototype mold inserts or test molds for design validation, conduct trials to verify part quality, cycle time, and mold performance, and involve the customer in testing to gather feedback for further refinement."
                          : "准备原型模具嵌件或测试模具以进行设计验证，进行试验以验证零件质量、周期时间和模具性能，并让客户参与测试以收集反馈以进一步完善。"}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-4">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      4
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Final Design and Documentation/Final Design:"
                          : "最终设计和文档/最终设计:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? " Integrate prototype feedback into the final mold design, prepare detailed manufacturing drawings with material specifications, surface finishes, and tolerances, and document maintenance and operational guidelines for the mold tool."
                          : "将原型反馈整合到最终模具设计中，准备包含材料规格、表面光洁度和公差的详细制造图纸，并记录模具工具的维护和操作指南。"}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-5">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      5
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Production Support/Contract Manufacturing:"
                          : "生产支持/合同制造:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? " We will support the customer in choosing a suitable manufacturing partner for mold production and ensure adherence to design specifications and quality standards throughout manufacturing."
                          : "我们将支持客户选择合适的模具生产制造合作伙伴，并确保在整个制造过程中遵守设计规范和质量标准。"}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      6
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "English"
                          ? "Product Delivery and Post-Production Support:"
                          : "产品交付和后期制作支持："}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "English"
                          ? "Deliver the completed mold tool to the customer and offer continuous support, including resolving mold issues, optimizing production processes, and making necessary design adjustments."
                          : "向客户交付完整的模具并提供持续支持，包括解决模具问题、优化生产流程以及进行必要的设计调整"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 px-5 md:px-0">
                    <button
                      onClick={() => router.push("/#enquiry")}
                      className="cursor-none rounded border-0 bg-[#014aad] px-8 py-2 text-lg text-white hover:bg-[#014aad] focus:outline-none"
                    >
                      {selectLangauge == "Chinese" ? "开始吧" : "Get Started"}
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="grid  sm:gap-y-5 md:mx-10 md:grid-cols-1 lg:grid-cols-2">
                <div className="px-5 md:px-0">
                  <img
                    className=" max-h-[700px]  w-full md:mt-0 lg:object-contain "
                    src="assets/our_process.jpg"
                    alt="step"
                  />
                </div>
                <div className="px-5">
                  {/* <div className="px-5 sm:w-full md:w-1/2 md:px-0 md:py-6 md:pl-10 lg:w-2/5"> */}
                  <div className="relative flex pb-8">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      1
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "概念设计/概念开发和原型制作"
                          : "Conceptual Design/ Concept Development and Prototyping:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "开发初始产品设计概念，包括几何形状、角度、浇口、冷却和顶出方面的考虑因素，并分享草图或 CAD 模型以获取反馈。"
                          : " Develop initial product design concepts, including considerations in geometry, angles, gating, cooling, and ejection, and share sketches or CAD models for your feedback."}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-8">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      2
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "详细设计和验证/概念测试:"
                          : "Detailed Design and Validation/Concept Testing:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "结合反馈来开发详细的 3D CAD 模型，进行模流分析以优化填充、冷却并最大程度地减少翘曲，并共享仿真结果以进行验证和可制造性保证"
                          : "Incorporate the feedback to develop a detailed 3D CAD model, conduct mold flow analysis to optimise filling, cooling, and minimise warpage, and share simulation results for validation and manufacturability assurance.."}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-8">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      3
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "原型和测试/工程和开发测试:"
                          : "Prototype and Testing/ Engineering and Development Testing:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "准备原型模具嵌件或测试模具以进行设计验证，进行试验以验证零件质量、周期时间和模具性能，并让客户参与测试以收集反馈以进一步完善。"
                          : " Prepare prototype mold inserts or test molds for design validation, conduct trials to verify part quality, cycle time, and mold performance, and involve the customer in testing to gather feedback for further refinement."}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-8">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      4
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "最终设计和文档/最终设计:"
                          : "Final Design and Documentation/Final Design:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "将原型反馈整合到最终模具设计中，准备包含材料规格、表面光洁度和公差的详细制造图纸，并记录模具工具的维护和操作指南。"
                          : " Integrate prototype feedback into the final mold design, prepare detailed manufacturing drawings with material specifications, surface finishes, and tolerances, and document maintenance and operational guidelines for the mold tool."}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex pb-8">
                    <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                      <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                    </div>
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      5
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "生产支持/合同制造:"
                          : "Production Support/Contract Manufacturing:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "我们将支持客户选择合适的模具生产制造合作伙伴，并确保在整个制造过程中遵守设计规范和质量标准。"
                          : " We will support the customer in choosing a suitable manufacturing partner for mold production and ensure adherence to design specifications and quality standards throughout manufacturing."}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex">
                    <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#014aad] text-white">
                      6
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="title-base mb-1 text-sm font-bold tracking-wider text-gray-900">
                        {selectLangauge == "Chinese"
                          ? "产品交付和后期制作支持："
                          : "Product Delivery and Post-Production Support:"}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {selectLangauge == "Chinese"
                          ? "向客户交付完整的模具并提供持续支持，包括解决模具问题、优化生产流程以及进行必要的设计调整"
                          : "Deliver the completed mold tool to the customer and offer continuous support, including resolving mold issues, optimizing production processes, and making necessary design adjustments."}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 px-5 md:px-0">
                    <button
                      onClick={() => router.push("/#enquiry")}
                      className="cursor-none rounded border-0 bg-[#014aad] px-8 py-2 text-lg text-white hover:bg-[#014aad] focus:outline-none"
                    >
                      {selectLangauge == "Chinese" ? "开始吧" : "Get Started"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Process;
