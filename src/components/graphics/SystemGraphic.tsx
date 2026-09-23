export function SystemGraphic() {
  return (
    <figure
      className="system-graphic"
      aria-label="Field network illustration combining terrain, infrastructure, signal paths, and root systems."
    >
      <div className="system-graphic-header">
        <span>FIELD NETWORK STUDY</span>
        <span>TERRAIN / SIGNAL / ROOT</span>
      </div>

      <svg
        className="field-network"
        viewBox="0 0 760 520"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="field-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M44 0H0V44"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.65"
            />
          </pattern>

          <radialGradient
            id="field-glow"
            cx="52%"
            cy="48%"
            r="48%"
          >
            <stop
              offset="0%"
              stopColor="#c8272d"
              stopOpacity="0.20"
            />
            <stop
              offset="100%"
              stopColor="#c8272d"
              stopOpacity="0"
            />
          </radialGradient>

          <linearGradient
            id="ridge-fade"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#252a25"
              stopOpacity="0.65"
            />
            <stop
              offset="100%"
              stopColor="#090a09"
              stopOpacity="0.98"
            />
          </linearGradient>
        </defs>

        <rect
          width="760"
          height="520"
          fill="url(#field-grid)"
          className="field-grid"
        />

        <circle
          cx="405"
          cy="246"
          r="220"
          fill="url(#field-glow)"
        />

        <g className="distant-mountains">
          <path
            d="
              M0 222
              L78 171
              L125 194
              L190 137
              L240 178
              L315 103
              L357 147
              L416 83
              L487 159
              L544 118
              L624 183
              L689 143
              L760 197
              L760 290
              L0 290
              Z
            "
            fill="url(#ridge-fade)"
          />

          <path
            d="
              M0 259
              L86 211
              L144 238
              L228 188
              L301 244
              L385 169
              L458 238
              L538 196
              L625 249
              L701 215
              L760 243
            "
            fill="none"
            stroke="rgba(239,237,231,0.16)"
            strokeWidth="1.3"
          />
        </g>

        <g className="forest-silhouette">
          <path d="M20 317 l16 -48 l16 48 h-9 l13 31 h-40 l13 -31z" />
          <path d="M72 333 l18 -60 l18 60 h-10 l15 35 h-46 l15 -35z" />
          <path d="M126 326 l14 -43 l14 43 h-8 l12 29 h-36 l12 -29z" />
          <path d="M620 327 l16 -51 l16 51 h-9 l13 32 h-40 l13 -32z" />
          <path d="M675 340 l20 -66 l20 66 h-11 l16 38 h-50 l16 -38z" />
          <path d="M725 320 l14 -42 l14 42 h-8 l11 28 h-34 l11 -28z" />
        </g>

        <g className="topography">
          <path d="M14 78 C112 35 195 60 267 37 C349 12 429 45 501 24 C587 1 665 29 748 9" />
          <path d="M6 112 C103 68 188 91 270 66 C354 42 434 73 514 50 C597 27 671 53 754 35" />
          <path d="M18 147 C112 104 194 124 281 101 C363 79 448 105 526 84 C607 64 679 84 746 69" />
          <path d="M22 421 C118 389 204 405 284 379 C372 352 455 373 539 349 C618 326 686 344 749 326" />
          <path d="M9 456 C108 422 199 441 288 414 C374 389 462 406 548 384 C625 365 692 379 755 362" />
        </g>

        <g className="network-lines">
          <path d="M405 251 L224 170" />
          <path d="M405 251 L600 155" />
          <path d="M405 251 L184 320" />
          <path d="M405 251 L615 325" />
          <path d="M405 251 L410 104" />
        </g>

        <g className="root-lines">
          <path d="M405 251 C389 313 358 343 326 381 C292 421 284 456 258 507" />
          <path d="M405 251 C429 312 456 341 486 381 C516 421 527 459 553 509" />
          <path d="M393 300 C347 333 305 346 259 375 C220 398 194 425 168 466" />
          <path d="M417 300 C463 332 508 348 554 375 C592 397 620 426 646 464" />
        </g>

        <g className="network-nodes">
          <circle cx="405" cy="251" r="10" />
          <circle cx="224" cy="170" r="5" />
          <circle cx="600" cy="155" r="5" />
          <circle cx="184" cy="320" r="5" />
          <circle cx="615" cy="325" r="5" />
          <circle cx="410" cy="104" r="5" />
        </g>

        <g className="signal-line">
          <path d="M184 320 C266 294 337 283 405 251 C481 214 541 183 600 155" />
        </g>
      </svg>

      <figcaption>
        <strong>
          Infrastructure is another kind of ecosystem.
        </strong>

        <span>
          Network topology / terrain / root structure
        </span>
      </figcaption>
    </figure>
  )
}
