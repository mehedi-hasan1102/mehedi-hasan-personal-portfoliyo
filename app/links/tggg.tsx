 <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-geist text-base-content max-w-3xl mx-auto pt-4"
    >
      <div className="bg-base-200 rounded-lg p-6 min-h-screen">
        {/* Header */}
        <h2 className="text-3xl mb-6">Links</h2>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {socialCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="mb-3 text-sm tracking-widest uppercase text-base-content/60">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.links.map((link, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm underline-offset-6 decoration-dashed hover:underline hover:text-primary transition-all duration-300"
                    >
                      <link.icon size={14} />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>